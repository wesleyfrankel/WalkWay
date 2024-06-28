"use client";

import React, { useState } from "react";
import "./globals.css";
import App from "./components/App";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

export default function Home() {
  return (
    <div>
      <Row className="justify-content-center">
        <Col xs="auto" className="p-5 m-5">
          <h1>WalkWay</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto">
          <App />
        </Col>
      </Row>
    </div>
  );
}
