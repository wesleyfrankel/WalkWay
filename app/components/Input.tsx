"use client";
import React, { useState } from "react";
import TravelData from "./inputHelpers/TravelData";
import SearchForm from "./inputHelpers/SearchForm";

interface JourneyData {
  distance: number;
  steps: number;
  calories: number;
  time: number;
}

const Input: React.FC = () => {
  const [journeyData, setJourneyData] = useState<JourneyData | null>(null);

  const handleFormSubmit = (startingCity: string, destination: string) => {
    const journey: JourneyData = {
      distance: 1,
      steps: 2,
      calories: 3,
      time: 4,
    };
    setJourneyData(journey);
  };

  return (
    <div className="col-md-4">
      <SearchForm onSubmit={handleFormSubmit} />
      {journeyData && <TravelData journeyData={journeyData} />}
    </div>
  );
};

export default Input;
