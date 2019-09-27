import React from "react";
// import countries from "../countries";
import { Link } from "react-router-dom";
import axios from "axios";

class CountryDetail extends React.Component {
  state = {
    country: null
  };

  getCountryData = () => {
    const countryCode = this.props.match.params.countryCode;
    // localhost:5555
    axios.get(`/countries/${countryCode}`).then(response => {
      const country = response.data;
      console.log(response.data);
      this.setState({
        country: country
      });
    });
  };
  componentDidMount() {
    console.log("DETAIL MOUNT");
    this.getCountryData();
  }
  componentDidUpdate() {
    console.log("DETAIL UPDATE");
    if (this.state.country.cca3 !== this.props.match.params.countryCode) {
      this.getCountryData();
    }
  }

  render() {
    const country = this.state.country;

    if (!country) return <></>;
    return (
      <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            {country.borders.length > 0 && (
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map(el => {
                      return (
                        <li key={el.cca3}>
                          <Link to={`/country/${el.cca3}`}>
                            {el.name.common}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;
