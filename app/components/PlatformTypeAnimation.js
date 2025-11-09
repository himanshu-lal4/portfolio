import React, { memo } from "react";
import styles from "../styles/main.module.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function PlatformTypeAnimation() {
  const [text] = useTypewriter({
    words: ["web", "mobile"],
    loop: 0, // Infinite loop (0 = infinite, {} is not standard)
    typeSpeed: 60,
    deleteSpeed: 50,
  });
  return (
    <p className={styles.platforms}>
      I build things for{" "}
      <span style={{ color: "#FFC83D", fontSize: 30 }}> {text}</span>
      <Cursor cursorStyle={"_"} />
    </p>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(PlatformTypeAnimation);
