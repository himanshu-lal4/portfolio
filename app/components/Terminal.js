"use client";
import React, { useState, useCallback, memo } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import styles from "../styles/Terminal.module.css";

const TerminalComponent = () => {
  const [terminalLineData, setTerminalLineData] = useState([
    <div key="initial">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          fontWeight: "600",
        }}>
        <TerminalOutput>Know more about me</TerminalOutput>
      </div>
      <TerminalOutput>Welcome to the wrack&apos;s terminal!</TerminalOutput>
      <TerminalOutput>
        Type &quot;<span style={{ color: "#F4C025" }}>commands</span>&quot; into the
        terminal window and hit enter to see all commands
      </TerminalOutput>
    </div>,
  ]);

  const handleInput = useCallback((input) => {
    if (input === "commands") {
      setTerminalLineData([
        <div key="commands">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: "600",
            }}>
            <TerminalOutput>Know more about me</TerminalOutput>
          </div>
          <TerminalOutput>Welcome to the wrack&apos;s terminal!</TerminalOutput>
          <TerminalOutput>
            Type &quot;<span style={{ color: "#F4C025" }}>commands</span>&quot; into the
            terminal window and hit enter to see all commands
          </TerminalOutput>
          <TerminalOutput>
            help <br />
            info <br />
            hello <br />
            commands <br />
            kill <br />
            clear <br />
            facts <br />
            github <br />
            hacker <br />
            info <br />
            contact
          </TerminalOutput>
        </div>,
      ]);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Terminal
        name="WRACK 👨‍💻"
        colorMode={ColorMode.Dark}
        onInput={handleInput}
        startingInputValue=""
        prompt="C:\wrack\portfolio$"
        height="415px"
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
};

// Memoize to prevent unnecessary re-renders
export default memo(TerminalComponent);
