// Search results component for displaying search result counts
import React from "react";
import { Box, Typography } from "@mui/material";
import { MESSAGES } from "../../constants";

interface SearchResultsProps {
  filteredCount: number;
  totalCount: number;
  searchTerm: string;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  filteredCount,
  totalCount,
  searchTerm,
}) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="body2" color="text.secondary">
        {filteredCount === totalCount
          ? MESSAGES.SEARCH_RESULTS_ALL(totalCount)
          : MESSAGES.SEARCH_RESULTS_FILTERED(filteredCount, totalCount)}
        {searchTerm && <> {MESSAGES.SEARCH_RESULTS_FOR(searchTerm)}</>}
      </Typography>
    </Box>
  );
};
