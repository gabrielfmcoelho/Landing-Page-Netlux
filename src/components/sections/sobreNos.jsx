//  ------------------------------------------------
//  # Impotação de componentes auxiliares, bibliotecas e imagens
import React from 'react'
import Missao from '/src/assets/images/missao.png'
import VideoInst from '/src/assets/videos/videoinst.mp4'
import Banner from '../auxiliary/banner.jsx'
import ComotTrab from '/src/assets/images/ComoTrabalhamos.png'
import Dim from '/src/assets/images/dim.png'
import Acessoria from '/src/assets/images/acessoria.png'
import Inst from '/src/assets/images/inst.png'
import Monit from '/src/assets/images/monit.png'
//  ------------------------------------------------

const SobreNos = () => {
  return (
    /*
        ------------------------------------------------
        # Inicio da seção: "Sobre Nós"
    */
    <section className='w-full h-fit bg-[#DCDEE2] '>
        {/*
            ------------------------------------------------
            ## Nossa história e video institucional
            Coelho -> Layout está pronto e responsivo por completo.
        */}
        <div className='lg:grid lg:grid-cols-2 lg:gap-10 xl:pl-[75px] lg:pl-[50px] flex-col max-md:space-y-10 p-4 w-full max-w-screen-2xl h-full'>
            {/*
                ------------------------------------------------
                ### Titulo e texto nossa historia
                Coelho -> Layout está pronto e responsivo.
            */}
            <div className='flex flex-col space-y-2'>
                <h1 className='tw-fonte-titulo text-black max-md:text-left'>
                    <p>Conheça um pouco da nossa história </p>
                </h1>
                <p className='text-black tw-fonte-texto max-md:text-left'> 
                    A Netlux Solar é uma empresa subsidiária do grupo Netlux  especializada em implantação de sistemas de geração de  energia Solar. Oferecemos soluções completas, para que  nossos clientes possam gerar sua própria energia e reduzir os seus custos, e assim, investir em outros sonhos.
                </p>
            </div>
            {/* 
                ### Video institucional
                Coelho -> Layout está pronto e responsivo.
            */}
            <video className="w-full tw-formato-video md:w-[490px] md:h-[270px] m-auto h-full max-lg:w-6/7" controls>
                <source src={VideoInst} type="video/mp4"/>
            </video>
        </div>
        {/*
            ------------------------------------------------
        */}
        {/*
            ------------------------------------------------
            ## Nossa missão
            Coelho -> Layout está pronto e responsivo.
        */}.
        <div className='flex flex-col xl:pl-[75px] lg:pl-[50px] pt-[50px] p-4 max-md:w-screen'>
            <h1 className='text-black tw-fonte-titulo'>
                Nossa missão
            </h1>            
            <div className='flex flex-row items-start'>
                <div>
                    <img src={Missao} alt="image" className='max-md:hidden h-[110px] w-[200px]'/>
                </div>
                <p className='text-black tw-fonte-texto w-[450px] text-left'> 
                    Fornecer serviços e soluções integradas com o mais alto padrão
                    de qualidade, visando atender e superar as expectativas dos
                    clientes e sociedade.
                </p>       
            </div>     
        </div>
        {/*
            ------------------------------------------------
        */}
        {/*
            ------------------------------------------------
            ## Como trabalhamos
            Coelho -> Layout está pronto e responsivo
        */}
        <div className='flex flex-col xl:pl-[75px] lg:pl-[50px] pt-[50px] p-4 max-md:w-screen'>
            <h1 className='text-black tw-fonte-titulo'>
                Como trabalhamos
            </h1>
            <div className='flex flex-row items-center justify-center pt-[20px] max-lg:flex-col space-y-2'>
                <img src={ComotTrab} className='max-lg:hidden'/>
                <div className='lg:hidden'>
                    <img src={Dim}/>
                    <p className='text-black tw-fonte-texto text-center'>1º Dimensionamento</p>
                </div>
                <div className='lg:hidden'>
                    <img src={Acessoria}/>
                    <p className='text-black tw-fonte-texto text-center'>2º Assessoria</p>
                </div>
                <div className='lg:hidden'>
                    <img src={Inst}/>
                    <p className='text-black tw-fonte-texto text-center'>3º Instalação</p>
                </div>
                <div className='lg:hidden'>
                    <img src={Monit}/>
                    <p className='text-black tw-fonte-texto text-center'>4º Monitoramento</p>
                </div>
            </div>
        </div>
        {/*
            ------------------------------------------------
        */}
        {/*
            ------------------------------------------------
            ## Banner
            Coelho -> Layout está pronto e responsivo.
        */}
        <div className='pt-[50px]'>
            <Banner/>
        </div>
        {/*
            ------------------------------------------------
        */}
    </section>
    /*
        Fim da seção: "Sobre Nós"
        ------------------------------------------------
    */
  )
}

export default SobreNos