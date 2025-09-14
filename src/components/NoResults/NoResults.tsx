import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { MESSAGES } from "../../constants";
import type { Person } from "../../interfaces";

interface NoResultsProps {
  filteredPersons: Person[];
  searchTerm: string;
  onClearSearch: () => void;
}

export const NoResults: React.FC<NoResultsProps> = ({
  filteredPersons,
  searchTerm,
  onClearSearch,
}) => {
  if (filteredPersons.length > 0 || !searchTerm) {
    return null;
  }

  return (
    <Box sx={{ textAlign: "center", py: 8 }}>
      <Typography variant="h5" component="h3" gutterBottom>
        {MESSAGES.NO_RESULTS_TITLE}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          mb: 2,
        }}
      >
        <Typography variant="body1" color="text.secondary">
          {MESSAGES.NO_RESULTS_MESSAGE}
        </Typography>
        <Button
          variant="text"
          color="primary"
          onClick={onClearSearch}
          sx={{
            textTransform: "none",
            minWidth: "auto",
            p: 0,
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          {MESSAGES.CLEAR_SEARCH_BUTTON}
        </Button>
      </Box>
    </Box>
  );
};
