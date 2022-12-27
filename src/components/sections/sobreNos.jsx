import React from 'react'
import Missao from '/src/assets/images/missao.png'
import VideoInst from '/src/assets/videos/videoinst.mp4'
import Banner from '../auxiliary/banner.jsx'
import ComotTrab from '/src/assets/images/ComoTrabalhamos.png'

const SobreNos = () => {
  return (
    <section className='h-[1250px] bg-[#DCDEE2] flex flex-col'>
        <div className='flex flex-row pl-[75px] space-x-16'>
            <div className='flex flex-col'>
                <h1 className='tw-fonte-titulo text-black'>
                    <p>Conheça um pouco</p>
                    <p>da nossa história </p>
                </h1>
                <p className='text-black tw-fonte-texto w-[650px]'> 
                    A Netlux Solar é uma empresa subsidiária do
                    grupo Netlux  especializada em implantação de
                    sistemas de geração de  energia Solar. Oferecemos 
                    soluções completas, para que  nossos clientes
                    possam gerar sua própria energia e reduzir  os seus
                    custos, e assim, investir em outros sonhos.
                </p>
            </div>
            <video className="w-full tw-formato-video my-auto" controls>
                <source src={VideoInst} type="video/mp4"/>
            </video>
        </div>
        <div className='flex flex-col pl-[75px] pt-[50px]'>
            <h1 className='text-black tw-fonte-titulo'>
                Nossa missão
            </h1>            
            <div className='flex flex-row'>
                <div>
                    <img src={Missao} alt="image" className='h-[110px] w-[200px]'/>
                </div>
                <p className='text-black tw-fonte-texto w-[450px]'> 
                    Fornecer serviços e soluções integradas com o mais alto padrão
                    de qualidade, visando atender e superar as expectativas dos
                    clientes e sociedade.
                </p>       
            </div>     
        </div>
        <div className='flex flex-col'>
            <h1 className='text-black tw-fonte-titulo pl-[75px] pt-[50px]'>
                Como trabalhamos
            </h1>
            <div className='flex items-center justify-center pt-[20px]'>
                <img src={ComotTrab}/>
            </div>
        </div>
        <div className='pt-[120px]'>
            <Banner/>
        </div>   
    </section>
  )
}

export default SobreNos