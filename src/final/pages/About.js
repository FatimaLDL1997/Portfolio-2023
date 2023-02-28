import Menubar from "../components/Menubar";
import Title from "../components/Tiltle";
import Sidebar from "../components/Sidebar";
import AboutSection from "../components/AboutSection";
import ImageSection from "../components/ImageSection";

const About = () => {
  return (
    <section className='about-container'>
      <Title />
      <div className='middle-container-about'>
        <Menubar />
        <ImageSection />
        <AboutSection />
        <div className='about-btn'>
          <div className='resume-btn'>resume</div>
          <div className='linkedin-btn'>linkedin</div>
        </div>
      </div>
      <Sidebar />
    </section>
  );
};
export default About;
