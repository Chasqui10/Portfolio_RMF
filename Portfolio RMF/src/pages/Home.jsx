import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Project from "..components/UI/ProjectSecttion/ProjectPreview";
import ListItem from "../components/UI/ListItem";

import API from "../utils/API";

export default function Home() {
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    const { data } = await API.getProjects();
    
    setProjects(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to my Portfolio</h1>
      <p>Here are some of my projects:</p>
      <div className="container pt-4">
        <div className="row">
          {projects.map((project) => (
            <ListItem key={project.id}>
              <Project key={project.id} project={project} />
            </ListItem>
          ))}
        </div>
      </div>
      <div>
        <h2>Skills</h2>
        <ListItem />
      </div>
    </div>
  );
}