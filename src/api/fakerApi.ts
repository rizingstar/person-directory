// Faker API functions for generating fake data
import axios from "axios";
import type { Person, ApiResponse } from "../interfaces";
import { ENDPOINTS } from "../constants/endpoints";
import { MESSAGES } from "../constants/messages";

// Generic function to fetch data from Faker API
export const fetchFakerData = async <T>(
  endpoint: string,
  quantity: number
): Promise<T[]> => {
  try {
    const response = await axios.get<ApiResponse<T>>(
      `${ENDPOINTS.FAKER_API_BASE}/${endpoint}`,
      {
        params: {
          _quantity: quantity,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error(MESSAGES.CONSOLE.API_ERROR, error);
    throw error;
  }
};

// Specific function to fetch persons data
export const fetchPersons = async (quantity: number): Promise<Person[]> => {
  return fetchFakerData<Person>(ENDPOINTS.PERSONS_ENDPOINT, quantity);
};
