import React, { memo } from "react";
import styles from "@styles/main.module.css";
// import TypeAnimation from "./TypeAnimation";
// import { Cursor } from "react-simple-typewriter";

function Intro() {
  return (
    <div className={styles.box}>
      <p>Hello 👋</p>
      <p>
        I&apos;m WRACK{" "}
        <a className={styles.nameSmall}>
          aka <span>himanshu_lal</span>
        </a>
      </p>
    </div>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(Intro);
