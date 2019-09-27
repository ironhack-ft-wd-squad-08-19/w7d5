import React from "react";
import countries from "../countries";
import { Link } from "react-router-dom";

class CountryDetail extends React.Component {
  render() {
    const { cca3 } = this.props.match.params;

    const country = countries.find(el => el.cca3 === cca3);

    if (!country) return <></>;

    const borders = country.borders.map(cca3 =>
      countries.find(el => el.cca3 === cca3)
    );

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
            <tr>
              {borders.length > 0 && (
                <React.Fragment>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {borders.map(el => {
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
                </React.Fragment>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;
