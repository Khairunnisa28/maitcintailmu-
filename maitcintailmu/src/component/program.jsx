import React from 'react';
import '../style/unggulan.css';

function ProgramLainnya() {
  const programs = [
    "Tahfidz 5 Juz",
    "IT Programmer",
    "IT Graphic Designer",
    "Edutrip Luar Negeri",
    "Seminar Motivasi",
    "Study Tour Kampus",
    "Perkemahan",
    "Pembinaan Masuk Universitas Dalam Negeri dan Luar Negeri",
    "Praktek Khidmat Lapangan",
    "Literasi Tour",
    "Project Based Learning",
    "Sertifikat TOEFL"
  ];

  return (
    <section className="program-lainnya">
      <h2>Macam-macam Program Lainnya</h2>
      <hr />
      <div className="container">
        <div className="row">
          {programs.map((program, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{program}</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                  </p>
                  <a href="#" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramLainnya;
