import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import LinkedIn from "./pages/LinkedIn";
import SharedLayout from "./components/SharedLayout";
import Error from "./pages/Error";
import SingleProject from "./pages/SingleProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<SharedLayout />}> */}
        <Route index element={<Portfolio />} />
        <Route path='/:projectId' element={<SingleProject />} />
        <Route path='/#/about' element={<About />} />
        <Route path='/#/contact' element={<Contact />} />
        <Route path='/#/linkedin' element={<LinkedIn />} />

        {/* <Route path="products" element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route> */}
        {/* </Route> */}
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
