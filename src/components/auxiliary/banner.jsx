import React from 'react'
import BotaoContato from '/src/components/auxiliary/botaoContato.jsx'

const Banner = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='flex items-center sm:flex-row flex-col tw-formato-banner'>
            <div className='flex flex-col text-left m-auto'>
                <h1 className='tw-texto-banner text-white'>
                    QUER SABER MAIS SOBRE ENERGIA SOLAR ?
                </h1>
                <p className='tw-texto-banner text-white'>
                    FALE COM A GENTE
                </p>
            </div>
            <div className='flex items-center m-auto'> 
                <BotaoContato/>
            </div>
        </div>
    </div>
  )
}

export default Banner