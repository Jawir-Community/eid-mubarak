import Particles from "react-particles"
import {loadConfettiPreset} from 'tsparticles-preset-confetti'
import { Typewriter } from "react-simple-typewriter"
import { useState } from "react"
import Countdown from "react-countdown"
import music1 from './assets/music1.mp3'

function App() {
  const [message, setMessage] = useState(["🎉 Menuju 1 Syawal 1445 H ✨", "Selamat tinggal Ramadhan 1445 H 👋"])
  const [click, setClick] = useState(true)

  const particleInit = async(engine) => {
    await loadConfettiPreset(engine)
  }

  const timeLeft = () => {
    const newYear = new Date("April 9, 2024 18:00:00").getTime()
    const nowDate = new Date().getTime()
    const calculateTime = newYear - nowDate
    return calculateTime
  }

  const audio1 = new Audio()
  audio1.src = music1
  audio1.loop = true


  const handleClick = () => {
    if (click) {
      audio1.play()
      setClick(false)
    }
  }

  return (
    <>    
      <Particles init={particleInit} options={{ preset: "confetti" }}/>
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white lg:text-4xl text-xl font-bold z-50">
          <Typewriter words={message} loop={false} cursor/>
        </span>
        <div className="z-50 text-white">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => {
            setMessage(["Selamat Hari Raya Idul Fitri 🙏🏻", "Mohon Maaf Lahir dan Batin 🙏🏻"])
            const button = document.getElementById('button')
            button.classList.remove("hidden")
          }}/>
        </div>
        <button className="bg-white text-black z-50 p-4 rounded-lg animate-bounce mt-8 hidden" onClick={handleClick} id="button">Click Me</button>
      </div>
    </>    
  )
}

export default App