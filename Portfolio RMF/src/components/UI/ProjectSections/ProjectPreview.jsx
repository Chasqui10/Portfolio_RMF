export default function ProjectPreview({ project }) {
  
  const { title, description, image, technologies, github, deployed } = project;

  return ( 
    <div className="project-preview">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={deployed} target="_blank" rel="noreferrer">
          Deployed
        </a>
      </div>
    </div>
    );
}