import React, { useState } from "react";
import Particles from "react-particles";
import { loadConfettiPreset } from 'tsparticles-preset-confetti';
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";
import music1 from './assets/audio/takbiran.mp3';
import ketupat from "./assets/img/ketupat.png";
import bedug from "./assets/img/bedug.png";
import masjid from "./assets/img/masjid.png";

function App() {
  const [message, setMessage] = useState(["🎉 Menuju 1 Syawal 1445 H ✨", "Selamat tinggal Ramadhan 1445 H 👋"]);
  const [click, setClick] = useState(true);
  const [confettiPosition, setConfettiPosition] = useState({ x: 0, y: 0 });

  const particleInit = async (engine) => {
    await loadConfettiPreset(engine);
  };

  const timeLeft = () => {
    const newYear = new Date("April 9, 2024 20:15:00").getTime();
    const nowDate = new Date().getTime();
    const calculateTime = newYear - nowDate;
    return calculateTime;
  };

  const audio1 = new Audio();
  audio1.src = music1;
  audio1.loop = true;

  const handleClick = (e) => {
    if (click) {
      audio1.play();
      setClick(false);
    }
  };

  const handleParticleClick = (e) => {
      setConfettiPosition({ x: e.clientX, y: e.clientY });
  }

  return (
    <>    
      <div className="flex flex-col justify-center items-center min-h-screen gap-4 relative bg-[#91ac31]" onClick={handleParticleClick}>
        <Particles init={particleInit} options={{ preset: "confetti" }}/>
        <div className="absolute flex top-[-8rem] gap-8">
            <img src={ketupat} className="bounce" alt="" loading="lazy"/>
            <img src={ketupat} className="bounce" alt="" loading="lazy"/>
            <img src={ketupat} className="bounce" alt="" loading="lazy"/>
        </div>
        <span className="text-white lg:text-4xl text-xl font-bold z-50">
          <Typewriter words={message} loop={false} cursor/>
        </span>
        <div className="z-50 text-white">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => {
            setMessage(["Selamat Hari Raya Idul Fitri 🙏🏻", "Mohon Maaf Lahir dan Batin 🙏🏻", "Selamat tinggal Ramadhan 1445 H 👋"])
            const button = document.getElementById('button')
            button.classList.remove("hidden")          
          }}/>
        </div>
        <button className="bg-white text-black z-50 p-4 rounded-lg animate-bounce mt-8 hidden" id="button" onClick={handleClick}>Takbiran gas!!!</button>
        <div className="absolute bottom-0">
          <img src={masjid} alt="" loading="lazy" className="w-[600px]" />
        </div>
        <div className="absolute bottom-0 right-[52%]">
          <img src={bedug} alt="" loading="lazy" />
        </div>
        <div className="absolute bottom-0 left-[52%]">
          <img src={bedug} alt="" loading="lazy" />
        </div>
      </div>
    </>    
  )
}

export default App;
