// Home page component with API integration and search functionality
import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { AppHeader } from "../components/AppHeader";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ErrorAlert } from "../components/ErrorAlert";
import { SearchResults } from "../components/SearchResults";
import { SearchBar } from "../components/SearchBar";
import { PersonGrid } from "../components/Person";
import { NoResults } from "../components/NoResults";
import { fetchPersons } from "../api/fakerApi";
import type { Person } from "../interfaces";
import { MESSAGES, API_CONFIG } from "../constants";

export const Home: React.FC = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [filteredPersons, setFilteredPersons] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Fetch persons on component mount
  useEffect(() => {
    const loadPersons = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchPersons(API_CONFIG.DEFAULT_QUANTITY);
        setPersons(data);
        setFilteredPersons(data);
      } catch (err) {
        setError(MESSAGES.ERROR_MESSAGE);
        console.error(MESSAGES.CONSOLE.FETCH_ERROR, err);
      } finally {
        setLoading(false);
      }
    };

    loadPersons();
  }, []);

  // Filter persons based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredPersons(persons);
      return;
    }

    const filtered = persons.filter((person) => {
      const fullName = `${person.firstname} ${person.lastname}`.toLowerCase();
      const email = person.email.toLowerCase();
      const city = person.address.city.toLowerCase();
      const search = searchTerm.toLowerCase();

      return (
        fullName.includes(search) ||
        email.includes(search) ||
        city.includes(search)
      );
    });

    setFilteredPersons(filtered);
  }, [searchTerm, persons]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle person edit
  const handleEdit = (person: Person) => {
    console.log("Edit person:", person);
    // TODO: Implement edit functionality
  };

  // Handle person delete
  const handleDelete = (person: Person) => {
    console.log("Delete person:", person);
    // TODO: Implement delete functionality
  };

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorAlert error={error} />;

  return (
    <Container
      maxWidth="xl"
      sx={{ py: 4, minHeight: "100vh", bgcolor: "grey.50" }}
    >
      <AppHeader />
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      <SearchResults
        filteredCount={filteredPersons.length}
        totalCount={persons.length}
        searchTerm={searchTerm}
      />
      <NoResults
        filteredPersons={filteredPersons}
        searchTerm={searchTerm}
        onClearSearch={() => setSearchTerm("")}
      />
      <PersonGrid
        persons={filteredPersons}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Container>
  );
};
