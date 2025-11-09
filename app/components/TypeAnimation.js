"use client";
import React, { memo } from "react";
import Typewriter from "typewriter-effect";

const TypeAnimation = ({ strings }) => {
  return (
    <Typewriter
      options={{
        strings: strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
        cursor: "_",
      }}
    />
  );
};

// Memoize to prevent unnecessary re-renders
export default memo(TypeAnimation);
