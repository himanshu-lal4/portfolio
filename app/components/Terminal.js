"use client";
import React, { useState } from "react";
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
  const handleInput = (input) => {
    if (input == "commands") {
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
  };
  return (
    <div className={styles.container}>
      <Terminal
        name="WRACK 👨‍💻" // Set the name of the terminal
        colorMode={ColorMode.Dark} // Set the color mode to Light
        onInput={(terminalInput) => {
          handleInput(terminalInput);
        }} // Set the onInput callback function
        startingInputValue="" // Set the starting input value
        prompt="C:\wrack\portfolio$"
        height="415px" // Set the height of the terminal
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
};

export default TerminalComponent;
