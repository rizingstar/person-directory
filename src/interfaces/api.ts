// API-related interfaces for the People Directory application

// Generic API response interface for Faker API
export interface ApiResponse<T> {
  status: string;
  code: number;
  total: number;
  data: T[];
}

// API error interface
export interface ApiError {
  message: string;
  code?: number;
  status?: string;
}
