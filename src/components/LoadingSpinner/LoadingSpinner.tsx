import React from "react";
import { Container, Box, CircularProgress, Typography } from "@mui/material";
import { MESSAGES } from "../../constants";

interface LoadingSpinnerProps {
  message?: string;
  size?: number;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = MESSAGES.LOADING_TITLE,
  size = 48,
}) => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 8,
        }}
      >
        <CircularProgress size={size} />
        <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
          {message}
        </Typography>
      </Box>
    </Container>
  );
};
