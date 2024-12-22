import KS from '../assets/KS.jpg';
import '../style/index.css';
import Perpustakaan from '../assets/Perpustakaan MA.jpg'
import Kelas from "../assets/Kelas MTs.jpg"
import Masjid from "../assets/Masjid.jpg"
import Lab_kom from "../assets/Lab Kom MA.jpeg"
import Lab_ipa from "../assets/Lab IPA 3.jpg"
function Index() {
    return (
        <>
            <section className="kata-pengantar">
                <h3 className="conte">Kata Pengantar</h3>
                <div className="container">
                    <img src={KS} alt="Kata Pengantar" /><br /><br />
                    <p>
                        Assalamu’alaikum. Wr.wb <br /><br />
                        MA IT Sekolah cinta ilmu adalah satu-satunya madrasah Aliyah yang fokus di bidang IT Programmer dan Desain Grafis. Sekolah yang memiliki brand MA IT memfasilitasi siswa-siswinya untuk mengembangkan potensi siswa di masa depan melalui program Tahfidz, Programmer, Desain Grafis, Persiapan kuliah dalam negeri, luar negeri, dan juga menyediakan pembelajaran yang menyenangkan yaitu outdoor class dan outdoor school.<br /><br />
                        Kami terus berinovasi sesuai dengan perkembangan zaman, menghadirkan pendidikan berkualitas dengan menyiapkan kurikulum terbaik serta manajemen kelas yang baik. Sehingga mampu melahirkan siswa yang unggul dan siap bersaing secara global. Selain itu, kami juga mempersiapkan program pembinaan akhlaq melalui pembelajaran karakter, pembinaan ruhiah, literasi dengan projek buku novel, essai dan program lainnya yang menarik bagi siswa.<br /><br />
                        Alhamdulillah banyak lulusan kami diterima di PTN terbaik dan juga di luar negeri, salah satunya diterima di Universitas Al Azhar. Kami terus berkomitmen untuk memfasilitasi siswa untuk bisa kuliah di luar negeri sesuai dengan kampus pilihannya.<br /><br />
                        Kami ucapkan terima kasih juga kepada para orang tua siswa yang sudah menitipkan putra-putri terbaiknya kepada kami. Semoga kami terus berbenah dan melakukan inovasi terbaik yang mampu menghasilkan karya terbaik.<br /><br />
                        <strong>Abun Bunyamin</strong><br />
                        Kepala Madrasah<br />
                        MA IT Sekolah Cinta Ilmu
                    </p>
                </div>
            </section>
            <section className="video-section">
                <div className="video-profile">
                    <h2 className="video-title">Video Profil</h2>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/D1INHplioDg?start=12" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </section>
            <section className="fasilitas-section">
                <h2 className="fasilitas-title">Kilasan Fasilitas</h2>
                <div className="gallery">
                    <img src={Kelas} alt="Kelas MA" />
                    <img src={Perpustakaan} alt="Perpustakaan MA" />
                    <img src={Lab_kom} alt="Lab Kom MA" />
                    <img src={Lab_ipa} alt="Lab IPA 3" />
                    <img src={Masjid} alt="Masjid" />
                </div>
            </section>

        </>
    );
}

export default Index;
