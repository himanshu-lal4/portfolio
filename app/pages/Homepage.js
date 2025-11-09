"use client";
import React, { useEffect, useState } from "react";
import TypeAnimation from "../components/TypeAnimation";
import Navbar from "../components/common/Navbar";
import styles from "../styles/main.module.css";
import PlatformTypeAnimation from "../components/PlatformTypeAnimation";
import SocialIconLinks from "../components/SocialLinks";
import styled from "@emotion/styled";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Feedback from "../components/common/Feedback";
function Homepage() {
  const roles = ["DSA Enthusiast", "Mobile App Developer", "Web Developer"];
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 1800);
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
            <img
              src="/developerImg.png"
              alt="developerLogo"
              width="500"
              height="500"
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

export default Homepage;
