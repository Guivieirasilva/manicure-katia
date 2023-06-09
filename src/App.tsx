import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "keen-slider/keen-slider.min.css";

import About from "./pages/About/Index";
import Works from "./pages/Works/Index";
import Contact from "./pages/Contact/Index";
import Home from "./pages/Home/Index";

import "./App.css";
import Nav from "./components/Nav/Index";
import { useState } from "react";
import { NavMenuMobile } from "./components/NavMenuMobile/Index";
import Footer from "./components/Footer/Index";
import { ModalAcceptTerms } from "./components/ModalAcceptTerms";
import TermsPage from "./pages/Terms";
import NotFoundPage from "./pages/404";

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <BrowserRouter>
      <NavMenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Nav MenuIsVisible={() => setMenuIsVisible(true)} />
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Works" element={<Works />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Terms" element={<TermsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ModalAcceptTerms />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
