import React, { useState, useEffect } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Button,
  Avatar,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";

const Header = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("all");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/COVID-19_Icon.svg/512px-COVID-19_Icon.svg.png"
          alt="covid-19"
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search..." />
        </div>
      </div>
      <div>
        <FormControl className="header__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="all">All</MenuItem>
            {countries.map((country) => (
              <MenuItem key={country.value} value={country.value}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>sourabhberde</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
