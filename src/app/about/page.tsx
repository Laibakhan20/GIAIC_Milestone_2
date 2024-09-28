import React from 'react'

 const About = () => {
  return (
    <div>
      <section className="about-header">
        <h1>About Me</h1>
        <p>
          Hi, I am Laiba Khan, a web developer with a passion for creating beautiful and functional websites.
        </p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Background</h2>
          <p>
            I have a strong foundation in web development, specializing in HTML5,CSS3,JavaScript,TypeScript,React, Next.js, and modern UI/UX principles. I’m committed to continuous learning and improving my skills.
          </p>
        </div>

        <div className="about-text">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>

        <div className="about-text">
          <h2>Experience</h2>
          <p>
            I have worked on multiple projects, developing responsive websites, single-page applications (SPAs), and user interfaces for various clients. I focus on creating efficient, maintainable, and scalable web applications.
          </p>
        </div>
      </section>
     
    </div>
  )
}

export default About
