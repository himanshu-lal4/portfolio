"use client";
import React, { useEffect, useState, memo, useMemo } from "react";
import Image from "next/image";
import TypeAnimation from "../components/TypeAnimation";
import Navbar from "../components/common/Navbar";
import styles from "../styles/main.module.css";
import PlatformTypeAnimation from "../components/PlatformTypeAnimation";
import SocialIconLinks from "../components/SocialLinks";
import styled from "@emotion/styled";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Feedback from "../components/common/Feedback";

// Memoize styled components outside the component
const ItemsContainer = styled.div`
  display: none;
  background-color: transparent;
  position: fixed;
  flex-direction: column;
  left: 40px;
  bottom: 0;
  font-size: 40px;
  justify-content: center;
  align-items: center;
  mix-blend-mode: difference;

  display: flex;

  > * {
    margin-bottom: 15px;
  }

  a {
    line-height: 0;
  }
`;

const Line = styled.div`
  height: 100px;
  width: 2px;
  background-color: white;
`;

function Homepage() {
  const roles = useMemo(() => ["DSA Enthusiast", "Mobile App Developer", "Web Developer"], []);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 1800);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return (
    <div className={styles.main}>
      <Navbar />

      <main>
        <section className={styles.homeSec}>
          <div className={styles.box}>
            <p style={{ fontSize: 40 }}>Hello!</p>
            <p style={{ fontSize: 30 }}>
              I&apos;m Wrack{" "}
              <a className={styles.nameSmall}>
                aka <span>himanshu_lal</span>
              </a>
            </p>
            <PlatformTypeAnimation />
            <TypeAnimation strings={roles} />
          </div>
          <div>
            <Image
              src="/developerImg.png"
              alt="Developer Illustration"
              width={500}
              height={500}
              priority
            />
          </div>
        </section>
        <TransitionGroup>
          {isMounted && (
            <CSSTransition timeout={1000}>
              <ItemsContainer>
                <SocialIconLinks iconClasses="side-icon" />
                <Line />
              </ItemsContainer>
            </CSSTransition>
          )}
        </TransitionGroup>
        <div>
          <Feedback />
        </div>
      </main>
    </div>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(Homepage);
