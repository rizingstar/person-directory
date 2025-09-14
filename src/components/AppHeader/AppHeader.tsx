// App header component for displaying the application title and subtitle
import React from "react";
import { Box, Typography } from "@mui/material";
import { MESSAGES } from "../../constants";

export const AppHeader: React.FC = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
        {MESSAGES.APP_TITLE}
      </Typography>
      <Typography variant="h6" color="text.secondary">
        {MESSAGES.APP_SUBTITLE}
      </Typography>
    </Box>
  );
};
