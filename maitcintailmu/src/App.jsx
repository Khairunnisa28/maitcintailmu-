import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react';
import Index from './component/index';
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Sejarah from "./component/sejarah";
import Visi from "./component/visi-misi";
import MutuSekolah from "./component/mutu-sekolah";
import Unggulan from "./component/Program_unggulan";
import Program from "./component/program";
import Ekstrakulikuler from "./component/ekstrakurikuler";
import Fasilitas from "./component/fasilitas";
import Galeri from "./component/galeri";
import PPDB from "./component/PPDB";
import Prestasi from "./component/prestasi";
import Event from "./component/Event";

function App() {
    return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/Sejarah" element={<Sejarah/>}/>
          <Route path="/Visi-misi" element={<Visi/>}/>
          <Route path="/MutuSekolah" element={<MutuSekolah/>}/>
          <Route path="/Unggulan" element={<Unggulan/>}/>
          <Route path="/Program" element={<Program/>}/>
          <Route path="/Ekstrakurikuler" element={<Ekstrakulikuler/>}/>
          <Route path="/fasilitas" element={<Fasilitas/>}/>
          <Route path="/Galeri" element={<Galeri/>}/>
          <Route path="/PPDB" element={<PPDB/>}/>
          <Route path="/Prestasi" element={<Prestasi/>}/>
          <Route path="/Event" element={<Event/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
    </BrowserRouter>
    );
}

export default App;
