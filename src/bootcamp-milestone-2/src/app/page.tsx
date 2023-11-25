// You can name the function within page.tsx anything you want.
export default function Home() {
  return (
    <html lang="en">
      <head>
        <title>Personal Website</title>
        <link rel="stylesheet" type="text/css" href="styles.css" />
      </head>
      <body>
        <nav className="navbar">
          <a href="index.html">
            <h1 className="logo">Website No.1</h1>
          </a>
          <ul className="nav-list">
            <li><a href="index.html">Home</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="resume.html">Resume</a></li>
            <li><a href="contact.html">Contact</a></li>
            <a href="blog_list.html">bloglist</a>
          </ul>
        </nav>
        <main>
          <h1 className="page-title"> Hello World! </h1>
          <div className="about">
            <div className="about-image-index">
              <img
                src="https://gopoly.com/images/2022/10/4/Srish_Maulik_UWgzN.jpg"
                width={400}
                height={400}
              />
            </div>
            <div className="about-text">
              I am <strong>Srish</strong> and I currently study at
              <em>Cal Poly.</em> I am majoring in <em>Computer Science.</em>
            </div>
          </div>
        </main>
        <footer className="footer">© 2023 My Personal Website | All Rights Reserved </footer>
      </body>
    </html>
  );
}

