import React from 'react'
import {Link} from 'react-scroll'
import Navbar from './Navbar'

const Home = () => {
  return (
    <section className="bg-[url('./src/assets/images/Energia-Solar.png')] bg-cover bg-no-repeat h-screen flex flex-col">
        <div className='flex items-center justify-center mt-5'>
            <Navbar/>
        </div>
        <div className='flex flex-col mx-auto items-center justify-center m-auto drop-shadow-md'>
            <div className='text-center text-[72px] font-[700] leading-[108px] text-white m-5'>
                <h1 className="">Excelencia e Qualidade</h1>
                <h1>
                    <span className="">Em </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F68013] to-white">Energia Solar</span>
                </h1>
                <h1 className="">Para Você</h1>
            </div>
            <div className='mt-1'>
                <Link to='' smooth duration={500} className="text-white hover:bg-opacity-95 font-[600] leading-[24px] text-[16px] w-[222px] h-[65px] flex items-center rounded-[30px] bg-[#F68013] bg-opacity-80 cursor-pointer text-center px-[33px] py-[20px] drop-shadow-md">
                    QUERO SABER MAIS
                </Link>
            </div>
        </div>   
    </section>
  )
}

export default Home