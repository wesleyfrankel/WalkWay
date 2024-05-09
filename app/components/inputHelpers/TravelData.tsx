import React from "react";
import Table from "react-bootstrap/Table";

interface JourneyProps {
  distance: number;
  steps: number;
  calories: number;
  time: number;
}

interface JourneyData {
  journeyData: JourneyProps;
}

const TravelData: React.FC<JourneyData> = ({ journeyData }) => {
  return (
    <Table striped bordered hover style={{ width: "300px" }}>
      <thead>Your Journey:</thead>
      <tbody>
        <tr>
          <td>Distance</td>
          <td>{journeyData.distance}</td>
        </tr>
        <tr>
          <td>Steps</td>
          <td>{journeyData.steps}</td>
        </tr>
        <tr>
          <td>Calories</td>
          <td>{journeyData.calories}</td>
        </tr>
        <tr>
          <td>Time</td>
          <td>{journeyData.time}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TravelData;
