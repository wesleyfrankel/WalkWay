"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";

interface FormProps {
  onSubmit: (startingCity: string, destination: string) => void;
}

const SearchForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [startingCity, setStartingCity] = useState("");
  const [destination, setDestination] = useState("");
  const [formIncomplete, setFormIncomplete] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!startingCity || !destination) {
      setFormIncomplete(true);
      return;
    }
    setFormIncomplete(false);
    onSubmit(startingCity, destination);
  };

  const handleStartingCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStartingCity(e.target.value);
  };

  const handleDestinationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className="search"
          placeholder="Enter starting city"
          value={startingCity}
          onChange={handleStartingCityChange}
        />
      </div>
      <div>
        <input
          type="text"
          className="search"
          placeholder="Enter destination"
          value={destination}
          onChange={handleDestinationChange}
          style={{ marginTop: "16px" }}
        />
      </div>
      {formIncomplete && (
        <p style={{ color: "red" }}>Please fill out both fields.</p>
      )}
      <Button
        className="searchBtn"
        type="submit"
        variant="outline-success"
        style={{ marginBottom: "50px " }}
      >
        Go
      </Button>
    </Form>
  );
};

export default SearchForm;
