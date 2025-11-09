"use client";
import TerminalComponent from "./components/Terminal";
import Phone from "./components/Phone";
import Homepage from "./pages/Homepage";
import Recruitment from "./components/Recruitment";
export default function Home() {
  return (
    <div>
      <Homepage />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "30px",
          padding: "0 100px 0 150px",
        }}>
        <Phone />
        <div>
          <Recruitment />
          <TerminalComponent />
        </div>
      </div>
    </div>
  );
}
