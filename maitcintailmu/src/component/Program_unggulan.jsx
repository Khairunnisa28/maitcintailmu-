import React from 'react';
import "../style/unggulan.css";
import Kairo from "../assets/Aziel Cairo.jpeg";

function Unggulan() {
    // Array yang berisi data untuk masing-masing kartu
    const programData = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46SJJpj628duL0mv3GGaUCeDR0ghRYFMKhw&s",
            text: "Boarding School"
        },
        {
            image: "https://i.ytimg.com/vi/qgXXV6t_PJQ/maxresdefault.jpg",
            text: "Tahfidz 5 Juz"
        },
        {
            image: "https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg",
            text: "IT Programmer & Graphic Designer"
        },
        {
            image: "https://th.bing.com/th/id/OIP.x8BXC9XQYUvIBbpFYOPJeAHaFA?rs=1&pid=ImgDetMain",
            text: "Persiapan Perguruan Tinggi Negeri Bersama Ruang Guru"
        },
        {
            image: "https://cdn.idntimes.com/content-images/community/2023/11/863595bf493edd5eff0cb9ddec1e6418b747e6f2-24087280eef4d570d4f010392b906aee-7d12b5066afc2db26acd30b29181ae9f.png",
            text: "Persiapan Kuliah Negeri Bersama Schoters"
        },
        {
            image: Kairo,  // Perbaiki di sini dengan langsung menggunakan variabel Kairo
            text: "Persiapan Kuliah Timur Tengah Bersama Markaz Al Azhar"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhNoO6GFyeoa9bXS-ttYJJ3XOQOUYiwaA9g&s",
            text: "Persiapan Kuliah Turkey Bersama Edutolia Education"
        }
    ];

    return (
        <section className="program-unggulan">
            <h2>Program Unggulan MA IT</h2>
            <br />
            <div className="container">
                <div className="gallery">
                    {/* Mengiterasi array untuk membuat kartu */}
                    {programData.map((program, index) => (
                        <div className="card" style={{ width: "18rem" }} key={index}>
                            <img src={program.image} className="card-img-top" alt={program.text} />
                            <div className="card-body">
                                <p className="card-text">{program.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Unggulan;
