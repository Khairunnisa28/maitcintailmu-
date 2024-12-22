import React from "react";
import PPDB1 from "../assets/Picture1.png";
import PPDB2 from "../assets/Picture2.png";

function PPDB() {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>
        Penerimaan Peserta Didik Baru 2025/2026
      </h3>
      <div style={{ textAlign: "center" }}>
        <img
          style={{ maxWidth: "100%", height: "auto" }}
          src={PPDB1}
          alt="PPDB 1"
        />
        <br />
        <br />
        <img
          style={{ maxWidth: "100%", height: "auto" }}
          src={PPDB2}
          alt="PPDB 2"
        />
      </div>
    </>
  );
}

export default PPDB;
