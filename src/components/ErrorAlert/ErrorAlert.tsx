// Error alert component for displaying error states
import React from "react";
import { Container, Box, Alert, Button, Typography } from "@mui/material";
import { Refresh as RefreshIcon } from "@mui/icons-material";
import { MESSAGES } from "../../constants";

interface ErrorAlertProps {
  error: string;
  onRetry?: () => void;
  maxWidth?: number;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({
  error,
  onRetry = () => window.location.reload(),
  maxWidth = 600,
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
        <Alert
          severity="error"
          action={
            <Button
              color="inherit"
              size="small"
              startIcon={<RefreshIcon />}
              onClick={onRetry}
            >
              {MESSAGES.TRY_AGAIN_BUTTON}
            </Button>
          }
          sx={{ maxWidth }}
        >
          <Typography variant="h6" component="div">
            {MESSAGES.ERROR_TITLE}
          </Typography>
          {error}
        </Alert>
      </Box>
    </Container>
  );
};
