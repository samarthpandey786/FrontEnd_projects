import React from 'react'
import {footerLogo} from '../assets/images'
import {footerLinks, socialMedia} from '../constants'
import { copyrightSign } from '../assets/icons'
const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col '>
        <div className='flex flex-col items-start'>
          <a href="/">
          <img src={footerLogo} width={150}  height={46}/></a>
          <p className='mt-6 text-base leading-7 font-mono text-white-400 sm:max-w-sm'>Get Shoes ready for the new term at your nearest Nike store. Find your perfect size In Store. Get Rewards</p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div className='flex justify-center w-12 h-12 bg-white hover:bg-slate-400 rounded-md'>
                <a href="" className='flex justify-center'><img src={icon.src} alt={icon.alt}
                width={24}
                height={24} /></a>
                
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
              {footerLinks.map((section)=>(
                <div key={section}>
                   <h4 className='font-bold font-mono text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
                   <ul>{section.links.map((link)=>(
                    <li key={link.name} className='font-mono mt-2 text-white-400 text-base leading-normal hover:text-slate-400'><a href="">{link.name}</a></li>
                   ))}</ul>
                </div>
              ))}
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
          <div className='flex flex-1 justify-start items-center font-mono cursor-pointer'>
            <img src={copyrightSign} alt='copyright'
            width={20}
            height={20} 
            className='rounded-full m-0'/>
            <p >
              Copyright. All rights reserved
            </p>
          </div>
          <p className='font-mono cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
