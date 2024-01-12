import React from "react";
import '../../src/componet/style.css'
import image from "../componet/Image.jpg";
export default function Gambar() {
  return (
    <div className="Background">
        <img src={image}alt="Gambar"></img>
    </div>
  );
}
