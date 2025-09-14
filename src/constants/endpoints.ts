// API endpoints for the People Directory application

export const ENDPOINTS = {
  FAKER_API_BASE: import.meta.env.VITE_FAKERAPI_BASE_ORIGIN,

  PERSONS_ENDPOINT: "persons",
} as const;

export const API_CONFIG = {
  DEFAULT_QUANTITY: 12,
} as const;
