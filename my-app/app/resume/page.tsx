import Link from "next/link";
import style from "./page.module.css";

export default function Resume() {
    return (
        <main>
        <Link id="downloadPDF" href="resume.pdf" download>Download Resume</Link>
        <div>
            <section>
            <h2 className = "section_title">Education</h2>
            <div>
                <h3 className = "entry_title"><b>California Polytechnic State University,</b> San Luis Obispo, CA</h3>
                <h3 className = "entry_title">September 2023 - Present</h3>
                <p className = "entry_info">• 1st year Computer Science Undergraduate</p>
                <p className = "entry_info">• Courses: Data Structures, Calculus III</p>
            </div>
            <div>
                <h3 className = "entry_title"><b>Mark Keppel High School,</b> Alhambra, CA</h3>
                <h3 className = "entry_title">August 2019 - May 2023</h3>
                <p className = "entry_info">• Cumulative GPA: 4.13</p>
                <p className = "entry_info">• Courses: AP CSA, AP Physics I, AP Calculus AB & BC, AP Chemistry</p>
            </div>
            </section>
            <section>
            <h2 className = "section_title">Experience</h2>
            <div>
                <h3 className = "entry_title"><b>Tomomi AYCE Sushi Restaurant,</b> Alhambra, CA</h3>
                <h3 className = "entry_title">June 2023 - September 2023</h3>
                <p className = "entry_info">Hostess</p>
                <p className = "entry_info">• Dedicated 20-30 hr/wk to greeting incoming/departing customers with attentive, professional, and warm customer service</p>
                <p className = "entry_info">• Determined seating arrangements for customers effectively for walk-ins and reservations</p>
                <h3 className = "entry_title"><b>Salute for Style,</b> New Haven, CT</h3>
                <h3 className = "entry_title">September 2021 - May 2022</h3>
                <p className = "entry_info">Remote Operations Intern</p>
                <p className = "entry_info">Salute for Style is a non-profit organization dedicated to providing free wardrobe for women veterans, active duty military, and military spouses.</p>
                <p className = "entry_info">• Executed weekly job interviews</p>
                <p className = "entry_info">• Co-headed applicant outreach on Indeed and Handshake and assembled 20+ Indeed listings</p>
            </div>
            </section>
            <section>
            <h2 className = "section_title">Coursework</h2>
            <ul className = "course_list">
                <li>Data Structures - Present</li>
                <li>Calculus III - Present</li>
                <li>AP CSA</li>
                <li>AP Physics</li>
                <li>AP Calculus AB/BC</li>
            </ul>
            </section>
            <section>
            <h2 className = "section_title">Skills</h2>
            <ul className = "skill_list">
                <li>Java/JavaScript</li>
                <li>HTML/CSS</li>
                <li>AutoCAD</li>
                <li>Public Speaking</li>
                <li>Teamwork</li>
            </ul>
            </section>
            <section>
            <h2 className = "section_title">Projects</h2>
            <div>
                <h3 className = "entry_title">Hack4Impact Website</h3>
                <p className = "entry_info">Small and simple website done with Visual Studio Code</p>
            </div>
            </section>
        </div>
        </main>
    );
}
  
  