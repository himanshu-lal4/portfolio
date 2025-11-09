"use client";
import dynamic from "next/dynamic";
import Homepage from "./pages/Homepage";

// Lazy load heavy components for better performance
const TerminalComponent = dynamic(() => import("./components/Terminal"), {
  loading: () => <div style={{ height: "415px" }}>Loading terminal...</div>,
  ssr: false, // Terminal doesn't need SSR
});

const Phone = dynamic(() => import("./components/Phone"), {
  loading: () => <div>Loading...</div>,
});

const Recruitment = dynamic(() => import("./components/Recruitment"), {
  loading: () => <div>Loading...</div>,
});

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
