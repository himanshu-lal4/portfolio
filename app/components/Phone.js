import React, { memo, useCallback } from "react";
// import Ashleigh from "../images/ashleigh.svg";
import styles from "../styles/Phone.module.css";
// import { openContact } from "./contact";

const Phone = () => {
  const handleClick = useCallback(() => {
    // openContact();
    console.log("onpressing hireme");
  }, []);

  return (
    <div className={styles.phone} id="phone">
      <div className={styles.innerSkin}>
        <div className={styles.phoneContent}>
          <h1 className={styles.title}>Hello There, Stranger!</h1>
          {/* <Ashleigh className={styles.bounce} /> */}
          <h2 className={styles.subtitle}>Let&apos;s build together...</h2>
          <button
            className={`${styles.button} ${styles.hasRainbowBackground} ${styles.hasTextWhite} ${styles.isRounded}`}
            onClick={handleClick}
            aria-label="Let's Talk">
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </div>
  );
};

// Memoize to prevent unnecessary re-renders
export default memo(Phone);
