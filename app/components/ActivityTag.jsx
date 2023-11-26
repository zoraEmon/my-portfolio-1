import React from 'react'

const ActivityTag = ({ name, onClick, isSelected}) => {
    const buttonStyles = isSelected ? "text-white border-[#FFCD4B]" : "text-[#adb7be] border-slate-600 hover:border-white"
    return (
    <button
        className={`${buttonStyles} rounded-full border-2 border-[#FFCD4B] px-2 py-1 md:text-sm text-xs cursor-pointer`}
        onClick={() => onClick(name)}
    >
       {name}
    </button>
  )
}

export default ActivityTag