// Search bar component for filtering persons
import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { MESSAGES } from "../../constants";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxWidth?: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  maxWidth = 400,
}) => {
  return (
    <Box sx={{ mb: 4 }}>
      <TextField
        fullWidth
        placeholder={MESSAGES.SEARCH_PLACEHOLDER}
        value={value}
        onChange={onChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        sx={{ maxWidth }}
      />
    </Box>
  );
};
