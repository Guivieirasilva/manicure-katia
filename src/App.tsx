import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { BubblyContainer } from "react-bubbly-transitions";

import About from "./pages/About/Index";
import Works from "./pages/Works/Index";
import Contact from "./pages/Contact/Index";
import Home from "./pages/Home/Index";

import "./App.css";
import Nav from "./components/Nav/Index";
import { useState } from "react";
import { NavMenuMobile } from "./components/NavMenuMobile/Index";

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <BrowserRouter>
      <NavMenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Nav MenuIsVisible={() => setMenuIsVisible(true)} />

      <BubblyContainer />
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Works" element={<Works />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<>NOT FOUND</>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
