import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data";

const ImageTiles = () => {
  return (
    <section className='imageTiles-container'>
      {projects.map((project, projectIndex) => {
        const { id, url, text, thumbnail, skills } = project;
        const newSkills = skills.map((skill) => `|${skill}| `).join("");
        return (
          <Link key={id} to={`/${id}`} className={`cell cell-${id}`}>
            {/* <div> */}
            <div className='container'>
              <img className='photo' src={thumbnail} alt='' />
              <div className='modal'>
                <div className='text'>{text}</div>
                <div className='skill-text'>{newSkills}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};
export default ImageTiles;
