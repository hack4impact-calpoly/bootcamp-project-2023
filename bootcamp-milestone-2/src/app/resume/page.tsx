import React from "react";
import Header from "../components/header";
import Layout from "../layout";

export default function Resume() {
    return (
        <Layout>
            <div className= "resume">
                <Header pageTitle="Resume" />
                <section className= "section">
                    <h2 className= "section-title">Education</h2>
                    <div className= "entry">
                        <h3 className= "entry-title"> B.S. Computer Science
                        </h3>
                        <p className= "entry-info">
                            <strong>Expected Graduation:</strong> June 2026<br />  
                            <strong>California Polytechnic State University |</strong> San Luis Obispo, CA</p>
                    </div>
                </section>
                <section className= "section">
                    <h2 className= "section-title">Experience</h2>
                    <div className= "entry">
                        <h3 className= "entry-title">MalwareBytes, Santa Clara, CA - Front End Development Intern</h3>
                        <p className= "entry-info">
                            <ul>
                                <li>Created map feature displaying cyber-security remote intrusions in Nebula-Retina, a React-based web application</li>
                                <li>Learned key concepts in threat detection and incident response to support the team in identifying potential security threats</li>
                                <li>Acquired skills in backlog management, user story creation, and task prioritization, for successful  delivery of software features</li>
                            </ul>
                        </p>
                        <p className= "entry-description"></p>
                    </div>
                    <div className= "entry">
                        <h3 className= "entry-title">P.I. Works, Reston, VA - I.T. Intern</h3>
                        <p className= "entry-info">
                            <ul>
                                <li>Worked in I.T. department to optimize business systems and operations by creating various software and automated applications</li>
                                <li>Created workflows, applications, and reports for the company’s departments using Microsoft power platforms</li>
                            </ul>
                        </p>
                        <p className= "entry-description"></p>
                    </div>
                    <div className= "entry">
                        <h3 className= "entry-title">FizzySoaps, San Ramon, CA - Website Designer</h3>
                        <p className= "entry-info">
                            https://fizzysoaps.shop/<br />
                            <ul>
                                <li>Increased user checkout (conversion rate) growth rate by 1% each month</li>
                            </ul>
                        </p>
                        <p className= "entry-description"></p>
                    </div>
                    <div className= "entry">
                        <h3 className= "entry-title">The Coder School, San Ramon, CA - Code Instructor</h3>
                        <p className= "entry-info">
                            <ul>
                                <li>Designed 50+ Scratch and Python projects for beginner students to create more engaging classes</li>
                                <li>Instructed elementary to high school aged students in Scratch and Python in 1 on 1 lessons</li>
                                <li>Built female-friendly curriculum to encourage young, female students’ interest in coding</li>
                            </ul>
                        </p>
                        <p className= "entry-description"></p>
                    </div>
                </section>
                <section className= "section">
                    <h2 className= "section-title">Skills</h2>
                    <ul className= "skill-list">
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Node</li>
                        <li>Jest</li>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Jupyter Notebooks</li>
                        <li>TensorFlow</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>C</li>
                        <li>R</li>
                    </ul>
                </section>
                <section className= "section">
                    <h2 className= "section-title">Projects</h2>
                    <div className= "entry">
                        <h3 className= "entry-title">Nebula Retina Web Application</h3>
                        <p className= "entry-info">
                            MalwareBytes web application which allows users and companies to monitor 
                            web attacks within organizations
                        </p>
                        <p className= "entry-description">Created web attack map using React, TypeScript, and CSS styling to display targets and sources
                            of web intrusions
                        </p>
                    </div>
                    <div className= "entry">
                        <h3 className= "entry-title">Fizzy Soaps Website</h3>
                        <p className= "entry-info">
                            Website for handmade soap business. Products are ordered directly through site.
                        </p>
                        <p className= "entry-description">
                            Created using <em>Liquid</em> via <em>Shopify</em>. Coded 100+ lines of CSS and HTML for FizzySoaps website to add menus, font themes, and page templates.
                        </p>
                    </div>
                </section>
                <section className= "section">
                    <h2 className= "section-title">Coursework</h2>
                    <ul className= "course-list">
                        <li>DeAnza College: Web Page Development</li>
                        <li>Foothill College: JavaScript for Programmers</li>
                        <li>Cal Poly: Machine and Assembly Language Programming</li>
                        <li>Cal Poly: Systems Programming</li>
                        <li>Cal Poly: Object-Oriented Programming and Design</li>
                        <li>Cal Poly: Data Structures and Algorithms</li>
                        <li>Diablo Valley College: Introduction to Programming </li>
                    </ul>
                </section>
            </div>
        </Layout>
    );
}