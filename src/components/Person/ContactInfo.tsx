// Contact information component for displaying contact details
import React from "react";
import { Box, Typography } from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import type { Person } from "../../interfaces";

interface ContactItemProps {
  icon: React.ReactNode;
  content: string;
  href?: string;
  isLink?: boolean;
  minHeight?: number;
  alignItems?: "center" | "flex-start";
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  content,
  href,
  isLink = false,
  minHeight,
  alignItems = "center",
}) => {
  const iconSx = {
    color: "text.secondary",
    mr: 1,
    fontSize: 20,
    ...(alignItems === "flex-start" && { mt: 0.25 }),
  };

  const contentSx = {
    color: isLink ? "primary.main" : "text.secondary",
    textDecoration: "none",
    ...(isLink && {
      "&:hover": { textDecoration: "underline" },
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),
    ...(alignItems === "flex-start" && { lineHeight: 1.4 }),
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems,
        mb: 1,
        ...(minHeight && { minHeight }),
      }}
    >
      <Box sx={iconSx}>{icon}</Box>
      <Typography
        variant="body2"
        component={isLink ? "a" : "span"}
        href={isLink ? href : undefined}
        sx={contentSx}
      >
        {content}
      </Typography>
    </Box>
  );
};

export const ContactInfo: React.FC<{ person: Person }> = ({ person }) => {
  const {
    email,
    phone,
    address: { street, buildingNumber, city, zipcode },
  } = person;
  const formattedAddress = `${street} ${buildingNumber}, ${city} ${zipcode}`;

  const contactItems = [
    {
      icon: <EmailIcon />,
      content: email,
      href: `mailto:${email}`,
      isLink: true,
    },
    {
      icon: <PhoneIcon />,
      content: phone,
      href: `tel:${phone}`,
      isLink: true,
    },
    {
      icon: <LocationIcon />,
      content: formattedAddress,
      alignItems: "flex-start" as const,
      minHeight: 40,
    },
  ];

  return (
    <Box sx={{ mb: 2, px: 2 }}>
      {contactItems.map((item, index) => (
        <ContactItem
          key={index}
          icon={item.icon}
          content={item.content}
          href={item.href}
          isLink={item.isLink}
          alignItems={item.alignItems}
          minHeight={item.minHeight}
        />
      ))}
    </Box>
  );
};
