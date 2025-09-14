// PersonCard component for displaying person information
import React from "react";
import { Card, CardContent, Avatar, Typography, Box } from "@mui/material";
import {
  Language as WebsiteIcon,
  Male as MaleIcon,
  Female as FemaleIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import type { PersonCardProps } from "../../interfaces";
import { MESSAGES } from "../../constants/messages";
import { CountryFlag } from "./CountryFlag";
import { ContactInfo } from "./ContactInfo";
import { EditMenuButton } from "./EditMenu";
import { stringAvatar } from "../../utils";

export const PersonCard: React.FC<PersonCardProps> = ({
  person,
  onEdit,
  onDelete,
}) => {
  const { firstname, lastname, image } = person;
  const {
    address: { country, country_code: countryCode },
  } = person;
  const fullName = `${firstname} ${lastname}`;

  const getGenderIcon = () => {
    switch (person.gender.toLowerCase()) {
      case "male":
        return <MaleIcon sx={{ color: "primary.main", fontSize: 20 }} />;
      case "female":
        return <FemaleIcon sx={{ color: "secondary.main", fontSize: 20 }} />;
      default:
        return <PersonIcon sx={{ color: "text.secondary", fontSize: 20 }} />;
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 1,
        transition: "box-shadow 0.3s",
        "&:hover": { boxShadow: 6 },
        position: "relative",
      }}
    >
      <EditMenuButton onEdit={onEdit} onDelete={onDelete} person={person} />

      <CardContent sx={{ pt: 0, pb: 2, px: 0 }}>
        <Box sx={{ position: "relative", mb: 6 }}>
          <Box
            sx={{
              height: 100,
              backgroundColor: "primary.main",
              position: "relative",
              width: "100%",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              top: 48,
              left: 0,
              right: 0,
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Avatar {...stringAvatar(image, fullName)} />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 2,
                  right: 2,
                  backgroundColor: "background.paper",
                  borderRadius: "50%",
                  padding: 0.25,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 20,
                  height: 20,
                  zIndex: 3,
                }}
              >
                {getGenderIcon()}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ textAlign: "center", mb: 2, px: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography variant="h6" component="h3">
              {fullName}
            </Typography>
            <CountryFlag
              countryCode={countryCode}
              country={country}
              size={16}
            />
          </Box>
        </Box>

        <ContactInfo person={person} />

        {person.website && (
          <Box sx={{ mb: 2, px: 2 }}>
            <Typography
              variant="body2"
              component="a"
              href={person.website}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              <WebsiteIcon sx={{ mr: 0.5, fontSize: 16 }} />
              {MESSAGES.VISIT_WEBSITE}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
