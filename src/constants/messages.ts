export const MESSAGES = {
  // App titles
  APP_TITLE: "People Directory",
  APP_SUBTITLE: "Browse and search through our collection of people",

  // Search functionality
  SEARCH_PLACEHOLDER: "Search by name, email, or city...",
  SEARCH_RESULTS_ALL: (count: number) => `Showing all ${count} people`,
  SEARCH_RESULTS_FILTERED: (filtered: number, total: number) =>
    `Showing ${filtered} of ${total} people`,
  SEARCH_RESULTS_FOR: (term: string) => `for "${term}"`,

  // No results state
  NO_RESULTS_TITLE: "No people found",
  NO_RESULTS_MESSAGE: "Try adjusting your search terms or",
  CLEAR_SEARCH_BUTTON: "clear the search",

  // Loading states
  LOADING_TITLE: "Loading persons...",

  // Error states
  ERROR_TITLE: "Error",
  ERROR_MESSAGE: "Failed to load persons. Please try again later.",
  TRY_AGAIN_BUTTON: "Try Again",

  // Person card actions
  EDIT_BUTTON: "Edit",
  DELETE_BUTTON: "Delete",
  VISIT_WEBSITE: "Visit Website",

  // Console messages
  CONSOLE: {
    API_ERROR: "API Error:",
    FETCH_ERROR: "Error fetching persons:",
  },
} as const;
