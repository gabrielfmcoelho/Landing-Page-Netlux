//  ------------------------------------------------
//  # Impotação de componentes auxiliares, bibliotecas e imagens
import React from 'react'
import BotaoContato from '/src/components/auxiliary/botaoContato.jsx'
//  ------------------------------------------------

const Banner = () => {
  return (
    /* 
        ------------------------------------------------
        # Inicio do "Banner"
        Coelho -> O banner é uma seção que contém um título e um botão de contato.
        ... Já está com layout pronto e responsivo.
    */
    <div className='flex items-center justify-center w-full h-fit'>
        <div className='flex items-center lg:flex-row flex-col tw-formato-banner lg:rounded-[10px] xl:w-6/7 max-w-screen-2xl'>
            <div className='flex flex-col text-left m-auto max-md:text-center max-md:pt-5 max-md:pb-5 md:m-5'>
                <h1 className='tw-texto-banner text-white'>
                    QUER SABER MAIS SOBRE ENERGIA SOLAR ?
                </h1>
                <p className='tw-texto-banner text-white'>
                    FALE COM A GENTE
                </p>
            </div>
            <div className='flex items-center m-auto max-md:pb-5 md:m-5'> 
                <BotaoContato/>
            </div>
        </div>
    </div>
    /* 
        # Fim do "Banner"
        ------------------------------------------------
    */
  )
}

export default Banner