import React from "react";
import countries from "./countries";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetail from "./components/CountryDetail";
import { Route } from "react-router-dom";

import "./App.css";

class App extends React.Component {
  state = {
    countries: countries
  };

  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
          <div className="container">
            <div className="row">
              <CountriesList countries={this.state.countries} />
              <Route exact path="/country/:cca3" component={CountryDetail} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
