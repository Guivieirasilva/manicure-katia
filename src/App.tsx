import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { BubblyContainer } from "react-bubbly-transitions";
import About from "./pages/About/Index";
import Works from "./pages/Works/Index";
import Contact from "./pages/Contact/Index";
import Home from "./pages/Home/Index";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
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
