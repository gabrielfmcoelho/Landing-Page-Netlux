import React from 'react'
import Logo from '/src/assets/images/logo.png'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'


const Footer = () => {
  return (
    <div>
        <div className='flex space-x-10 flex-row items-center justify-center w-[1014px] h-[327px] mt-96 mb-11 mx-40'>
            <div className='w-[270px] h-[111px]'>
                <p className='font-poppins text-white font-medium text-xl leading-8'>
                    Excelência e qualidade, 
                    desde o primeiro contato 
                    até o pós venda
                </p>
            </div>
            <div>
                <img src={Logo} alt="logo" className='w-[315px] h-[327px]' />
            </div>
            <div className='flex flex-col space-y-14'>
                <div className='flex flex-row items-center'>
                    <AiOutlineFacebook size={55} className="text-orange-500"/>
                    <p className='font-poppins text-white font-normal text-xl leading-8 ml-5'>@netluxsolar</p>
                </div>
                <div className='flex flex-row items-center'>
                    <AiOutlineInstagram size={55} className="text-orange-500"/>
                    <p className='font-poppins text-white font-normal text-xl leading-8 ml-5'>facebook.com/netluxsolar</p>
                </div>
                <div className='flex flex-row items-center'>
                    <AiOutlineLinkedin size={55} className="text-orange-500"/>
                    <p className='font-poppins text-white font-normal text-xl leading-8 ml-5'>@netluxsolar</p>
                </div>
            </div>
        </div>
        
        <div className='flex flex-col items-center h-[10px]'>
            <p className=' text-white'>2022 Netlux Solar - Todos os direitos reservados</p>
            <p className='text-white '>Produzido por Deploy.ed</p>
        </div>
    </div>
  )
}

export default Footer