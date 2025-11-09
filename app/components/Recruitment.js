"use client";
import React, { memo } from "react";
import styles from "../styles/Recruitment.module.css";

const Recruitment = () => {
  return (
    <div className={styles.recruitmentNotifier}>
      <p className={styles.title}>Recruitment Status</p>
      <span className={styles.notificationStatus} aria-hidden="true"></span>
      Looking for a Job
    </div>
  );
};

// Memoize to prevent unnecessary re-renders
export default memo(Recruitment);
