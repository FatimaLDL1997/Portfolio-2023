import Title from "../components/Tiltle";
import Subtitle from "../components/Subtitle";
import Menubar from "../components/Menubar";
import Sidebar from "../components/Sidebar";
import ContactSection from "../components/ContactSection";
import InputSection from "../components/InputSection";
import Submission from "../pages/Submission";
import { useGlobalContext } from "../pages/context";

const Contact = () => {
  const { state } = useGlobalContext();
  console.log(state);
  if (state.succeeded) {
    console.log(state);
    return <Submission />;
  }
  return (
    <section className='contact-container'>
      <Title />
      {/* <Subtitle /> */}
      <h1 style={{ opacity: "0" }}>invisible space</h1>

      <div className='middle-container'>
        <Menubar />
        {/* <h1
          style={{ paddingBottom: "2rem", textAlign: "center", color: "white" }}
        >
          __________________________
        </h1> */}
        <ContactSection />
        {/* <h1 style={{ textAlign: "center", color: "white" }}>
          __________________________
        </h1> */}
        <InputSection />
      </div>
      <Sidebar />
    </section>
  );
};
export default Contact;
