import Title from "../components/Tiltle";
import Menubar from "../components/Menubar";
import Sidebar from "../components/Sidebar";
import ProjectSection from "../components/ProjectSection";
import ProjectInfoSection from "../components/ProjectInfoSection";
import styled from "styled-components";

const SingleProject = () => {
  return (
    <Wrapper>
      <section className='singleProject-container'>
        <Title />
        <h1 style={{ opacity: "0" }}>invisible space</h1>

        <div className='middle-container'>
          <Menubar />
          <div className='flex-container'>
            <ProjectSection />
            <ProjectInfoSection />
          </div>
        </div>
        <Sidebar />
      </section>
    </Wrapper>
  );
};
export default SingleProject;

const Wrapper = styled.div`
  .flex-container {
    display: flex;
    flex-direction: column;
  }
`;
