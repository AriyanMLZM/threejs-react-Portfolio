import React from 'react'

const Music = ({ music, index, active, changeMusic }) => {
  return (
    <div
      className={`flex ${
        active ? 'bg-purple-700' : 'bg-[#0b0b0b]'
      } ${!active && 'md:hover:bg-gray-800'} items-center mt-2 h-[70px] rounded-[20px] w-[90%] select-none`}
      onClick={() => {if (!active) changeMusic(2, index)}}
    >
      <div className=" relative ml-3 flex justify-center items-center">
        <div className=" relative z-0 w-[50px] h-[50px] rounded-[20px] bg-gray-700 animate-pulse" />
        <img
          src={music.img}
          width={'50px'}
          alt="song"
          draggable={false}
          loading="lazy"
          className="rounded-[20px] absolute z-1"
        />
      </div>
      <div className="flex flex-col ml-6">
        <h1 className="text-white text-[20px]">{music.title}</h1>
        <h2
          className={`${active ? 'text-black' : 'text-purple-500'} text-[16px]`}
        >
          {music.singer}
        </h2>
      </div>
    </div>
  )
}

export default Music
