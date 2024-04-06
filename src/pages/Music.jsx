import React from 'react'
import { Html } from '@react-three/drei'

import { music, close } from '../assets/icons'
import { musics } from '../constants'

const Music = ({ ind, play, handleClose }) => {
  return (
    <Html
      transform
      occlude="blending"
      position={[-10.781, 4.75, -0.45]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={0.2}
    >
      <div className="w-[458px] h-[575px] bg-gradient-to-r items-center bg-[#111] select-none flex flex-col">
        <div className="flex justify-end w-full pr-5 mt-4">
          <button
            onClick={handleClose}
            type="button"
            className="w-[80px] h-[80px] flex justify-center items-center"
          >
            <img width={'40px'} src={close} alt="" />
          </button>
        </div>
        <img
          src={music}
          alt="music"
          width={'75px'}
          className="mt-10 select-none pointer-events-none"
        />
        <h1 className="text-purple-500 font-bold text-[40px] font-mono">
          {play ? 'Playing' : 'Paused'}
        </h1>
        <div className="flex flex-col w-[350px] gap-2 mt-20 h-[150px]">
          <h1 className="text-white text-[35px] font-mono">
            {musics[ind].title}
          </h1>
          <h2 className="text-purple-500 text-[30px] mt-3">
            {musics[ind].singer}
          </h2>
        </div>
      </div>
    </Html>
  )
}

export default Music
