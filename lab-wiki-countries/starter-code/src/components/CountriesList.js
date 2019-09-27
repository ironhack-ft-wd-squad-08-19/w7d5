import React from "react";
import { NavLink } from "react-router-dom";

const CountriesList = props => {
  const countries = props.countries;

  return (
    <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
      <div className="list-group">
        {countries.map(country => {
          return (
            <NavLink
              className="list-group-item list-group-item-action"
              //   activeStyle={{
              //     color: "red"
              //   }}
              to={`/country/${country.cca3}`}
              key={country.cca3}
            >
              <span>{country.flag}</span>
              {country.name.common}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
