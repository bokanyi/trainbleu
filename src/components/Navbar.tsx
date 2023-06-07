import React from "react";
import { navigate } from "../states/routes";

export default function Navbar() {
  return (
    <div className=" flex justify-between w-full sticky top-0 backdrop-blur-lg items-end">
   
      <div className="flex flex-col items-center">
        <img onClick={() => navigate("/")} src="/logo.png" alt="" className="w-20 cursor-pointer"/>
        <p onClick={() => navigate("/")}>TRAIN BLAU</p>
      </div>
      <div  className="flex gap-4 " >
        <button onClick={() => navigate("/")}>Főoldal</button>
        <button onClick={() => navigate("/about")}>Rólunk</button>
        <button onClick={() => navigate("/contact")}>Kapcsolat</button>
        {/* <button onClick={() => navigate("/references")}>Referenciák</button> */}
        <button onClick={() => navigate("/railway")}>Vasút</button>
        <button onClick={() => navigate("/construction")}>Magasépítés</button>
      </div>
    </div>
  );
}
