import "./globals.css";
import { Map } from "./components/Map";
import Input from "./components/Input";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

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
          <Map />
        </Col>
      </Row>
    </main>
  );
}
