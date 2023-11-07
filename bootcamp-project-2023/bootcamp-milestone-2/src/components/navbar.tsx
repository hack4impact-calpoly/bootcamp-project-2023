import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <nav className="navbar">
        <h1 className="logo">
          <a href="index.html">
            <img
              src="images/monogram_logo.svg"
              alt="Aidan Nesbitt's Monogram"
              className="monogram"
            />
          </a>
        </h1>
        <ul className="nav-list">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
