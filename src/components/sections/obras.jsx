import React from 'react'
import Stats from '../auxiliary/stats.jsx'
import MolduraObra from '../auxiliary/molduraObra.jsx'
import LogoBYD from '/src/assets/images/logoBYD.png'

const Obras = () => {
  return (
    <div className='h-[1500px] tw-background-obras'>
        <div className='pt-[100px] pl-[75px]'>
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
        <div className='pt-[70px]'>
            <MolduraObra/>
        </div>
        <div className='pt-[120px] pb-[50px]'>
            <Stats/>
        </div>
        <div className='flex flex-row h-fit space-x-[150px]'>
            <div className='flex flex-col my-auto pl-[75px]'>
                <h1 className='tw-fonte-titulo text-white'>
                    <span>A </span>
                    <span className='tw-destquebyd'>Netlux Solar </span>
                    <span>é a única</span>
                </h1>
                <h1 className='tw-fonte-titulo text-white'>
                    parceira BYD no Piauí
                </h1>
                <div className='tw-fonte-texto text-white'>
                    <p>
                        A BYD, maior empresa de elétricos do mundo,
                    </p>
                    <p>
                        firmou parceria com a Netlux Solar, trazendo 
                    </p>
                    <p>
                        inovação e tecnologia para nosso estado.
                    </p>
                </div>
            </div>
            <img src={LogoBYD} className='h-[501px] w-[498px]'/>
        </div>
    </div>
  )
}

export default Obras