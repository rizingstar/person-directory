import React from "react";
import { Tooltip } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

countries.registerLocale(enLocale);

export interface CountryFlagProps {
  countryCode: string;
  country: string;
  size?: number;
}

export const CountryFlag: React.FC<CountryFlagProps> = ({
  countryCode,
  country,
  size = 20,
}) => {
  return (
    <Tooltip title={country} arrow>
      <ReactCountryFlag
        countryCode={countryCode.toUpperCase()}
        svg
        style={{
          width: size,
          height: size * 0.75,
          borderRadius: 2,
          border: "1px solid #e0e0e0",
        }}
      />
    </Tooltip>
  );
};
