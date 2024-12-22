import React from "react";
import "../style/galeri.css"; // Tambahkan file CSS untuk styling

// Import semua gambar
import PPDB from "../assets/ppdb.jpg";
import Outdoor1 from "../assets/OUTDOOR SCHOOL 1.png";
import Outdoor2 from "../assets/OUTDOOR SCHOOL 2.png";
import Outdoor3 from "../assets/OUTDOOR SCHOOL 3.png";
import Outdoor4 from "../assets/OUTDOOR SCHOOL 4.png";
import Outdoor5 from "../assets/OUTDOOR SCHOOL 5.png";
import Outdoor6 from "../assets/outdorr school  1.jpg";
import Outdoor7 from "../assets/outdorr school  4.jpg";
import Outdoor8 from "../assets/outdorr school  5.jpg";
import P5 from "../assets/P5 1.jpg";
import Unjuk_karya1 from "../assets/UNJUK KARYA 1.png";
import Unjuk_karya2 from "../assets/UNJUK KARYA 2.png";
import Unjuk_karya3 from "../assets/UNJUK KARYA 3.png";
import Unjuk_karya4 from "../assets/UNJUK KARYA 4.png";
import Unjuk_karya5 from "../assets/UNJUK KARYA 5.png";
import Educourse1 from "../assets/educourse 1.png";
import Educourse2 from "../assets/educourse 2.png";
import Educourse3 from "../assets/educourse 3.png";
import Upacara1 from "../assets/kegiatan upacara 1.png";
import Upacara2 from "../assets/kegiatan upacara 2.png";
import Upacara3 from "../assets/kegiatan upacara 3.png";
import Upacara4 from "../assets/kegiatan upacara 4.png";
import Upacara5 from "../assets/kegiatan upacara 5.png";
import PHBN1 from "../assets/PHBN SISWA 1.png";
import PHBN2 from "../assets/PHBN SISWA 3.png";
import PHBN3 from "../assets/PHBN SISWA 11.png";
import PHBN4 from "../assets/PHBN SISWA 13.png";
import PHBN5 from "../assets/PHBN SISWA 15.png";

// Array data gambar
const images = [
  { src: PPDB, alt: "PPDB" },
  { src: Outdoor1, alt: "Outdoor 1" },
  { src: Outdoor2, alt: "Outdoor 2" },
  { src: Outdoor3, alt: "Outdoor 3" },
  { src: Outdoor4, alt: "Outdoor 4" },
  { src: Outdoor5, alt: "Outdoor 5" },
  { src: Outdoor6, alt: "Outdoor 6" },
  { src: Outdoor7, alt: "Outdoor 7" },
  { src: Outdoor8, alt: "Outdoor 8" },
  { src: P5, alt: "P5" },
  { src: Unjuk_karya1, alt: "Unjuk Karya 1" },
  { src: Unjuk_karya2, alt: "Unjuk Karya 2" },
  { src: Unjuk_karya3, alt: "Unjuk Karya 3" },
  { src: Unjuk_karya4, alt: "Unjuk Karya 4" },
  { src: Unjuk_karya5, alt: "Unjuk Karya 5" },
  { src: Educourse1, alt: "Educourse 1" },
  { src: Educourse2, alt: "Educourse 2" },
  { src: Educourse3, alt: "Educourse 3" },
  { src: Upacara1, alt: "Upacara 1" },
  { src: Upacara2, alt: "Upacara 2" },
  { src: Upacara3, alt: "Upacara 3" },
  { src: Upacara4, alt: "Upacara 4" },
  { src: Upacara5, alt: "Upacara 5" },
  { src: PHBN1, alt: "PHBN 1" },
  { src: PHBN2, alt: "PHBN 2" },
  { src: PHBN3, alt: "PHBN 3" },
  { src: PHBN4, alt: "PHBN 4" },
  { src: PHBN5, alt: "PHBN 5" },
];

function Galeri() {
  return (
    <>
      <header className="gallery-header">
        <h1>Selamat Datang di Galeri MA IT SCI</h1>
        <p>Temukan kegiatan kegiatan di galeri kami</p>
      </header>
      <section className="gallery-container">
        {images.map((image, index) => (
          <div className="card" key={index}>
            <img src={image.src} alt={image.alt} className="card-image" />
            <div className="card-title">{image.alt}</div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Galeri;
