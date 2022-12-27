import {BsWhatsapp} from 'react-icons/bs'
import React from 'react'


const BotaoContato = () => {
  return (
    <button className='tw-formato-botao-contato flex flex-row items-center justify-center space-x-2 hover:bg-[#25D366]'>
        <p className='tw-texto-botao-contato text-white'>
            WhatsApp
        </p>
        <span>
            <BsWhatsapp size={42} className='ml-1 text-white'/>
        </span>
    </button>
  )
}

export default BotaoContato