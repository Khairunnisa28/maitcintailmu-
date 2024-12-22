import React from 'react';
import '../style/unggulan.css';

function Ekstrakulikuler() {
  const activities = [
    "Multimedia",
    "Musik",
    "Pramuka",
    "Paskibra",
    "Futsal",
    "English Club",
    "Silat",
    "Seni",
    "Bahasa Arab",
    "Wall Climbing",
    "Panahan",
    "Basket"
  ];

  return (
    <section className="ekstrakulikuler">
      <h2>Ekstrakulikuler</h2>
      <hr />
      <div className="container">
        <div className="row">
          {activities.map((activity, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{activity}</h5>
                  <p className="card-text">
                    Explore and join various extracurricular activities that promote creativity, teamwork, and skill development.
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

export default Ekstrakulikuler;
