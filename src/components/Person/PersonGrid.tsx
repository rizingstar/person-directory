// Person grid component for displaying a grid of person cards
import React from "react";
import { Grid } from "@mui/material";
import { PersonCard } from "./PersonCard";
import type { Person } from "../../interfaces";

interface PersonGridProps {
  persons: Person[];
  onEdit?: (person: Person) => void;
  onDelete?: (person: Person) => void;
}

export const PersonGrid: React.FC<PersonGridProps> = ({
  persons,
  onEdit,
  onDelete,
}) => {
  if (persons.length === 0) {
    return null;
  }

  return (
    <Grid container spacing={2}>
      {persons.map((person) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={person.id}>
          <PersonCard person={person} onEdit={onEdit} onDelete={onDelete} />
        </Grid>
      ))}
    </Grid>
  );
};
