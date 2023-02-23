import Title from "../components/Tiltle";
import Menubar from "../components/Menubar";
import Sidebar from "../components/Sidebar";
import ProjectSection from "../components/ProjectSection";
import ProjectInfoSection from "../components/ProjectInfoSection";
import { projects } from "../data";

const SingleProject = () => {
  return (
    <section className="singleProject-container">
      <Title />
      <div className="middle-container">
        <Menubar />
        <ProjectSection />
        <ProjectInfoSection />
      </div>
      <Sidebar />
    </section>
  );
};
export default SingleProject;
