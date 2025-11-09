"use client";
import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="logo">
        <Link href="/" aria-label="Home">
          <Image
            src="/signature.png"
            width={180}
            height={180}
            alt="Portfolio Signature"
            priority
          />
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/button1">Home</Link>
        <Link href="/button2">Projects</Link>
        <Link href="/button3">Blogs</Link>
        <Link href="/button4">Experiences</Link>
        <Link href="/button5">Skills</Link>

        <button className={styles.resumeBtn} aria-label="Download Resume">resume</button>
        <Image
          src="/lightMode.png"
          alt="Toggle Light Mode"
          width={40}
          height={40}
          style={{ cursor: "pointer" }}
        />
      </div>
    </nav>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(Navbar);
