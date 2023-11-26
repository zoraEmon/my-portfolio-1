import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#320461] border-l-transparent border-r-transparent text-white'>
      <div className="container p-12 flex justify-center">
        <span>
          <Image className='pl-8'
            src="/images/logo1.png"
            height={100}
            width={100}
          />
          <p className='text-slate-600'>
            All rights reserved. <br />
            <span className='pl-3'>09657895392</span>
          </p>

        </span>
      </div>
    </footer>
  )
}

export default Footer