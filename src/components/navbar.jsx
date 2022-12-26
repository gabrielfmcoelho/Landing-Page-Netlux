import React, {useState} from 'react';
import {Link} from 'react-scroll';
import logo from '../assets/images/logo.png'
import BotaoOrcamento from './botaoOrcamento'

const Navbar = () => {
  return (
    <div className='h-[155px] flex items-center justify-center space-x-28 m-auto'>
        <img src={logo} alt="logo" className='w-[150px] h-[154px] drop-shadow-md' />
        <nav className='font-[600] leading-[24px] text-[16px] flex space-x-14 items-center justify-center text-white'>
            <a href="#" className='hover:text-[#F68013]'>INÍCIO</a>
            <a href="#" className='hover:text-[#F68013]'>OBRAS</a>
            <a href="#" className='hover:text-[#F68013]'>SOBRE NÓS</a>
            <a href="#" className='hover:text-[#F68013]'>CONTATO</a>
            <BotaoOrcamento/>
        </nav>
    </div>
  )
}

export default Navbar