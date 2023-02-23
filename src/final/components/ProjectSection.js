import React from "react";
import { projects } from "../data";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProjectSection = (images) => {
  const { projectId } = useParams();
  // console.log(projectId);
  // const { thumbnail } = images;
  // console.log(projects);
  const [main, setMain] = useState(projects[projectId - 1].thumbnail);
  // console.log(main);
  return (
    <>
      {projects
        .filter((project) => project.id == projectId)
        .map((filteredProject) => {
          // console.log(filteredProject);
          const { thumbnail, text, id, sliderImages } = filteredProject;
          // setMain(thumbnail);
          console.log(sliderImages);
          // const [main, setMain] = useState(thumbnail);
          return (
            <div key={id} className="projectSection-container">
              <div className="projectImage-container">
                <img src={main} className="projectSection-photo" alt="" />
              </div>
              <div className="projectSlider-container">
                {sliderImages.map((image, index) => {
                  return (
                    <img
                      src={image}
                      alt={image}
                      key={index}
                      onClick={() => setMain(image)}
                      // className={`${image.url === main.url ? "active" : null}`}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ProjectSection;
