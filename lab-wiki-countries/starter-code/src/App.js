import React from "react";
// import countries from "./countries";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetail from "./components/CountryDetail";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = {
    countries: []
  };

  componentDidMount() {
    console.log("DID MOUNT");
    axios.get("https://countries.tech-savvy.tech/countries").then(response => {
      console.log(response.data);
      this.setState({
        countries: response.data
      });
    });
  }

  render() {
    console.log("RENDER: this.state.countries: ", this.state.countries);
    return (
      <div className="App">
        <div>
          <Navbar />
          <div className="container">
            <div className="row">
              <CountriesList countries={this.state.countries} />
              <Route
                exact
                path="/country/:countryCode"
                component={CountryDetail}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
