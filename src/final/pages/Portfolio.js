import Menubar from "../components/Menubar";
import Title from "../components/Tiltle";
import Subtitle from "../components/Subtitle";
import ImageTiles from "../components/ImageTiles";
import Sidebar from "../components/Sidebar";

const Portfolio = () => {
  return (
    // <div className='flex-container'>
    <section className='portfolio-container '>
      <Title />
      <Subtitle />
      <div className='middle-container'>
        <Menubar />
        <ImageTiles />
      </div>
      <Sidebar />
    </section>
    // </div>
  );
};
export default Portfolio;
