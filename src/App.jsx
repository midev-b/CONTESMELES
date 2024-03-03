import { useState } from "react";
import "./App.css";
import { Accueil } from "./pages/ACCUEIL/Accueil";
import { Menu } from "./Components/Menu/Menu.jsx";
import { Histoires } from "./pages/HISTOIRES/Histoires.jsx";
import { Timo } from "./pages/HISTOIRES/ListeHistoires/Timo.jsx";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/histoires" element={<Histoires />}></Route>
        <Route path="/histoires/Timo" element={<Timo />}></Route>
        {/* <Route path="/jeux" element={<Jeux />}></Route>
        <Route path="/contact" element={<Contact />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
