import React from 'react';
import '../style/fasilitas.css';

function Fasilitas() {
  const facilities = [
    { name: "Ruang Kelas Dilengkapi dengan Proyektor dan Wifi", image: "https://via.placeholder.com/150?text=Kelas" },
    { name: "Lab. Komputer", image: "https://via.placeholder.com/150?text=Lab+Komputer" },
    { name: "Lab. IPA", image: "https://via.placeholder.com/150?text=Lab+IPA" },
    { name: "Prakarya", image: "https://via.placeholder.com/150?text=Prakarya" },
    { name: "Studio Musik", image: "https://via.placeholder.com/150?text=Studio+Musik" },
    { name: "Studio Foto", image: "https://via.placeholder.com/150?text=Studio+Foto" },
    { name: "Gedung Olahraga (GOR)", image: "https://via.placeholder.com/150?text=GOR" },
    { name: "Aula Pertemuan", image: "https://via.placeholder.com/150?text=Aula+Pertemuan" },
    { name: "Masjid", image: "https://via.placeholder.com/150?text=Masjid" },
    { name: "Toilet", image: "https://via.placeholder.com/150?text=Toilet" },
    { name: "Lapangan Upacara", image: "https://via.placeholder.com/150?text=Lapangan+Upacara" },
    { name: "Green House", image: "https://via.placeholder.com/150?text=Green+House" }
  ];

  return (
    <section className="fasilitas">
      <h2>Fasilitas MA IT</h2>
      <br />
      <div className="container">
        <div className="row">
          {/* Mengiterasi array fasilitas untuk membuat kartu */}
          {facilities.map((facility, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={facility.image} className="card-img-top" alt={facility.name} />
                <div className="card-body">
                  <h5 className="card-title">{facility.name}</h5>
                  <p className="card-text">
                    Fasilitas ini mendukung kegiatan pembelajaran dan pengembangan keterampilan.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Fasilitas;
