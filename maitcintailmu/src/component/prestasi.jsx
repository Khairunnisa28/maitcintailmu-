import React from "react";
import "../style/prestasi.css"; // Tambahkan file CSS untuk styling
import July_X from "../assets/1. Siswa terbaik kelas JULY 10.png";
import July_XI from "../assets/2. Siswa terbaik kelas JULY 12.png";
import July_XII from "../assets/3. Siswa terbaik kelas JULY 12.png";
import August_X from "../assets/4. Siswa terbaik kelas 10 AUGUST.png";
import August_XI from "../assets/5. Siswa terbaik kelas 11 AUGUS55T.png";
import August_XII from "../assets/6. Siswa terbaik kelas 12 AUGUST.png";
import Sept_X from "../assets/7. Siswa terbaik kelas SEPTEMBER 10.png";
import Sept_XI from "../assets/8. Siswa terbaik kelas SEPTEMBER 11.png";
import Sept_XII from "../assets/9. Siswa terbaik kelas SEPTEMBER 12.png";
import Oct_X from "../assets/10. Siswa terbaik kelas 10 OKTOBER.png";
import Oct_XI from "../assets/11. Siswa terbaik kelas 11 OKTOBER.png";
import Oct_XII from "../assets/12. Siswa terbaik kelas 12 OKTOBER.png";

// Data Prestasi
const prestasiList = [
  { id: 1, name: "Siswa Terbaik kelas X Bulan Juli", image: July_X },
  { id: 2, name: "Siswa Terbaik kelas XI Bulan Juli", image: July_XI },
  { id: 3, name: "Siswa Terbaik kelas XII Bulan Juli", image: July_XII },
  { id: 4, name: "Siswa Terbaik kelas X Bulan Agustus", image: August_X },
  { id: 5, name: "Siswa Terbaik kelas XI Bulan Agustus", image: August_XI },
  { id: 6, name: "Siswa Terbaik kelas XII Bulan Agustus", image: August_XII },
  { id: 7, name: "Siswa Terbaik kelas X Bulan September", image: Sept_X },
  { id: 8, name: "Siswa Terbaik kelas XI Bulan September", image: Sept_XI },
  { id: 9, name: "Siswa Terbaik kelas XII Bulan September", image: Sept_XII },
  { id: 10, name: "Siswa Terbaik kelas X Bulan Oktober", image: Oct_X },
  { id: 11, name: "Siswa Terbaik kelas XI Bulan Oktober", image: Oct_XI },
  { id: 12, name: "Siswa Terbaik kelas XII Bulan October", image: Oct_XII },
];

function Prestasi() {
  return (
    <div className="prestasi-container">
      <h1 className="prestasi-header">Prestasi Siswa</h1>
      <div className="prestasi-cards">
        {prestasiList.map((prestasi) => (
          <div key={prestasi.id} className="prestasi-card">
            <img
              src={prestasi.image}
              alt={prestasi.name}
              className="prestasi-image"
            />
            <h3 className="prestasi-title">{prestasi.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prestasi;
