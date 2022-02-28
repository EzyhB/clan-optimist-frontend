import { Container } from "@mui/material";
import React from "react";
import MainContent from "../MainContent";
import Navbar from "../Navbar";

import "./homepage.css";
export default function HomePage() {
  return (
    <main className="homepage-body">
      <Navbar />
      <Container
      // sx={{ width: "482px", display: "flex", justifyContent: "center" }}
      >
        <MainContent />
      </Container>
    </main>
  );
}
