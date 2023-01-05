//  ------------------------------------------------
//  # Impotação de componentes auxiliares, bibliotecas e imagens
import React from 'react'
import Stats from '../auxiliary/stats.jsx'
import MolduraObra from '../auxiliary/molduraObra.jsx'
import LogoBYD from '/src/assets/images/logoBYD.png'
import PPP1 from '/src/assets/images/PPP1.jpeg'
import PPP2 from '/src/assets/images/PPP2.jpeg'
//  ------------------------------------------------


const Obras = () => {
  return (
    /*
        ------------------------------------------------
        # Inicio da seção: "Obras"
    */
    <section className='w-full h-fit tw-background-obras max-md:pt-[50px] relative'>
        {/*
            ------------------------------------------------
            ## Algumas obras Netlux Solar
            Coelho -> Layout está pronto e responsivo.
        */}
        <div name='OBRAS' className=' relative flex flex-col xl:pl-[75px] lg:pl-[50px] lg:pt-[50px] p-4 max-md:w-full max-lg:text-center'>
            <h1 className='tw-fonte-titulo'>
                <span className='text-white'>Algumas obras </span>
                <span className='tw-cor-destaque-titulo'>Netlux Solar</span>
            </h1>
            <p className='tw-fonte-texto text-white'>
                Desde o primeiro contato até o pós venda, proporcionaremos
            </p>
            <p className='tw-fonte-texto text-white'>
            excelência e qualidade em todas as fases dos nossos projetos.
            </p>
        </div>
        {/*
            ------------------------------------------------
        */}
        {/*
            ------------------------------------------------
            ## Carrorcel de imagens
            Coelho -> Layout está pronto e responsivo.
        */}
        <div className='pt-[50px] relative max-xl:pr-4  max-xl:pl-4'>
            <MolduraObra/>
        </div>
        
        {/*
            ------------------------------------------------
        */}
        {/*
            ------------------------------------------------
            ## Barra de estatísticas
            Coelho -> Layout está pronto e responsivo.
        */}
        <div className='relative pt-[100px] max-lg:pb-[100px] max-md:pl-1 max-md:pr-1'>
            <Stats/>
        </div>
        {/*
            ------------------------------------------------
        */}
        {/*
            ------------------------------------------------
            ## Parceria com a BYD
            Coelho -> Layout está pronto e responsivo.
        */}
        <div className='lg:grid lg:grid-cols-2 lg:gap-28 xl:pl-[75px] lg:pl-[50px] flex flex-col max-lg:p-4 w-full max-w-screen-2xl h-full max-lg:justify-center max-lg:items-center'>
            <div className='flex flex-col space-y-2 max-lg:text-center my-auto'>
                <h1 className='tw-fonte-titulo text-white'>
                    <span>A </span>
                    <span className='tw-destquebyd'>Netlux Solar </span>
                    <span>é a única parceira BYD no Piauí</span>
                </h1>
                <div className='tw-fonte-texto text-white'>
                    <p>
                        A BYD, maior empresa de elétricos do mundo,
                        firmou parceria com a Netlux Solar, trazendo 
                        inovação e tecnologia para nosso estado.
                    </p>
                </div>
            </div>
            <img src={LogoBYD} className='h-[501px] w-[498px] max-lg:pl-12 max-sm:pl-6'/>
        </div>
        {/*
            ------------------------------------------------
        */}
        <div className='lg:grid lg:grid-cols-2 lg:gap-28 xl:pl-[75px] lg:pl-[50px] flex flex-col max-lg:p-4 w-full max-w-screen-2xl h-full max-lg:justify-center max-lg:items-center'>
            <div className='flex flex-col space-y-2 max-lg:text-center my-auto'>
                <h1 className='tw-fonte-titulo text-white'>
                    <span>A </span>
                    <span className='tw-destquebyd'>Netlux Solar </span>
                    <span>é a única parceira BYD no Piauí</span>
                </h1>
                <div className='tw-fonte-texto text-white'>
                    <p>
                        A BYD, maior empresa de elétricos do mundo,
                        firmou parceria com a Netlux Solar, trazendo 
                        inovação e tecnologia para nosso estado.
                    </p>
                </div>
            </div>
            <img src={PPP2} className='h-[501px] w-[498px] max-lg:pl-12 max-sm:pl-6'/>
        </div>
    </section>
    /*
        Fim da seção: "Obras"
        ------------------------------------------------
    */
  )
}

export default Obras