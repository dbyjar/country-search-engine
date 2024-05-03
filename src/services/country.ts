import axios from "axios";
import { Country } from "@/types/country.ts";

const countryURLAPI = "https://restcountries.com";

export const getListCountryByName = async (name: string) => {
  let res: any;

  try {
    res = await axios.get<Country[]>(`${countryURLAPI}/v3.1/name/${name}`);
  } catch (error) {
    res = error;
  }

  return res;
};

export const getCountryByFullname = async (fullname: string | any) => {
  let res: any;

  try {
    res = await axios.get<Country>(
      `${countryURLAPI}/v3.1/name/${fullname}?fullText=true`
    );
  } catch (error) {
    res = error;
  }

  return res;
};

// API v2 untuk currency dan callingcode tidak bisa diakses
export const getTheCurrencies = async (currency: string) => {
  return await axios.get(`${countryURLAPI}/v2/currency/${currency}`);
};

export const getTheCallingCode = async (callingcode: string) => {
  return await axios.get(`${countryURLAPI}/v2/callingcode/${callingcode}`);
};
