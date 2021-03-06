import "./App.css";
import { Routes, Route } from "react-router-dom";
import HostEventPage from "../HostEventPage";
import HomePage from "../HomePage";
import DisplayAllEventsPage from "../DisplayAllEventsPage";
import ProfilePage from "../ProfilePage";
import { Container } from "@mui/material";
function App() {
  return (
    <>
      <Container
        sx={{ width: "482px", display: "flex", justifyContent: "center" }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/host-event" element={<HostEventPage />} />
          <Route path="/all-events" element={<DisplayAllEventsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Container>
    </>
  );
}
export default App;
