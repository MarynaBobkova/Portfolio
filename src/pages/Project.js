import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "../helpers/projectsList";
import BtnWebLink from "../components/btnWebLink/BtnWebLink";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
            <p className="small">
              {" "}
              {project.description} <a href={project.link}>{project.link}</a>{" "}
              {project.description2}
            </p>
          </div>
          <div className="btn-container">
            {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
            {project.webLink && <BtnWebLink link={project.webLink} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
