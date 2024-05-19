"use client";
import "./globals.css";
// import { Map } from "./components/Map";
import { Map, APIProvider } from "@vis.gl/react-google-maps";
import Input from "./components/Input";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Directions from "./components/Map";

export default function Home() {
  return (
    <main>
      <Row className="justify-content-center">
        <Col xs="auto" className="p-5 m-5">
          <h1>WalkWay</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Input />
        </Col>
        <Col xs="auto">
          <APIProvider apiKey={"AIzaSyCo4mymeRBelldRSbRsM0UeeZ-oWrPkVPk"}>
            <Map
              defaultCenter={{ lat: 43.65, lng: -79.38 }}
              defaultZoom={9}
              gestureHandling={"greedy"}
              fullscreenControl={false}
            >
              <Directions />
            </Map>
          </APIProvider>
        </Col>
      </Row>
    </main>
  );
}
