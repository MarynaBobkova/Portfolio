import React from 'react'

const Skills = () => {
  return (
    <main className="section">
         <div className="container">
         <h2 className="title-1">Skills</h2>
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, Redux, HTML5, CSS, NPM, BootStrap,
                TailwindCSS, ReactJS(Fundamentals, Hooks, Router, Redux)
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>
                Java, Spring Boot, NodeJS, REST API, Databases: MySQL,
                PostgreSQL, MongoDB
              </p>
            </li>
          </ul> 
        </div>
        </main>
  )
}

export default Skills;