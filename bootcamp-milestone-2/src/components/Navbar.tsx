import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    return (
        // replace everything in between the <header> & <header /> tags
        // with your navbar code from your earlier milestones
        <header className={`${style.navbar} ${style.navList} }`} >

            <nav className="navbar">
                <h1 className="logo"><a href="index.html">Brandon's Personal Website</a></h1>
                <ul className="nav-list">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/resume">Resume</Link></li>
                    <li><Link href="/contact">Contact</Link></li>

                </ul>
            </nav>
        </header>
    ); 
}