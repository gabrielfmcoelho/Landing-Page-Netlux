//  ------------------------------------------------
//  # Impotação de componentes auxiliares, bibliotecas e imagens
import React, {useState} from 'react'
import Logo from '/src/assets/images/logo.png'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
//  ------------------------------------------------

const Footer = () => {
  //  ------------------------------------------------
  //  # Estrutura para lidar com o click do usuário
    const [click, setClick] = React.useState(false);
  //  ------------------------------------------------

  return (
    /*
        ------------------------------------------------
        # Inicio do componente: "Footer"
        Coelho -> O footer está com o layout pronto e completamente responsivo
    */       
    <div className='w-full h-fit'>
        {/*
            ------------------------------------------------
            ## Inicio do componente: "Footer para Mobile - Imagem, Texto e Redes Sociais"
            Coelho -> O layout está pronto e completamente responsivo
        */}
        <div className='lg:hidden'>
            <div className='flex flex-row items-center space-x-2 justify-center h-1/4'>
                <img src={Logo} alt='Logo Netlux Solar' className=' h-1/4 w-1/4'/>
                <p className='tw-fonte-texto text-white text-left m-1'>
                    Excelência e qualidade, 
                    desde o primeiro contato 
                    até o pós venda
                </p>
            </div>
            <br/>
            <div className='flex flex-row items-center justify-evenly'>
                <a onClick={()=>setClick(!click)} href='https://www.facebook.com/netluxsolar/' target='_blank' rel='noreferrer'>
                    <AiOutlineFacebook size={50} className='text-white hover:text-[#F68013] selection:text-[#F68013]'/>
                </a>
                <a onClick={()=>setClick(!click)} href='https://www.instagram.com/netluxsolar/' target='_blank' rel='noreferrer'>
                    <AiOutlineInstagram size={50} className='text-white hover:text-[#F68013] selection:text-[#F68013]'/>
                </a>
                <a onClick={()=>setClick(!click)} href='https://www.linkedin.com/company/netluxsolar/' target='_blank' rel='noreferrer'>
                    <AiOutlineLinkedin size={50} className='text-white hover:text-[#F68013] selection:text-[#F68013]'/>
                </a>
            </div>
        </div>
        {/*
            ## Fim do componente: "Footer para Mobile - Imagem, Texto e Redes Sociais"
            ------------------------------------------------
        */}
        {/*
            ------------------------------------------------
            ## Inicio do componente: "Footer para Desktop - Imagem, Texto e Redes Sociais"
            Coelho -> O layout está pronto e completamente responsivo
        */}
        <div className='max-lg:hidden'>
            <div className='h-1/4 flex items-center justify-center flex-row'>
                <p className='tw-fonte-texto text-white text-right m-1 w-1/4'>
                    Excelência e qualidade, 
                    desde o primeiro contato 
                    até o pós venda
                </p>
                <img src={Logo} alt='Logo Netlux Solar' className='h-1/4 w-1/4'/>
                <div className='w-1/4 flex flex-col'>
                    <p className='tw-fonte-texto text-white text-left m-1'>
                        Acesse nossas redes sociais
                    </p>
                    <div className='flex flex-row space-x-20'>
                        <a onClick={()=>setClick(!click)} href='https://www.facebook.com/netluxsolar/' target='_blank' rel='noreferrer'>
                            <AiOutlineFacebook size={50} className='text-white hover:text-[#F68013] selection:text-[#F68013]'/>
                        </a>
                        <a onClick={()=>setClick(!click)} href='https://www.instagram.com/netluxsolar/' target='_blank' rel='noreferrer'>
                            <AiOutlineInstagram size={50} className='text-white hover:text-[#F68013] selection:text-[#F68013]'/>
                        </a>
                        <a onClick={()=>setClick(!click)} href='https://www.linkedin.com/company/netluxsolar/' target='_blank' rel='noreferrer'>
                            <AiOutlineLinkedin size={50} className='text-white hover:text-[#F68013] selection:text-[#F68013]'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/*
            ## Fim do componente: "Footer para Desktop - Imagem, Texto e Redes Sociais"
            ------------------------------------------------
        */}
        {/*
            ------------------------------------------------
            ## Inicio do componente: "Divisoria linha branca"
            Coelho -> Não há nada a ser feito aqui
        */}
        <br/>    
        <div className='border border-white'></div>
        <br/>
        {/*
            ## Fim do componente: "Divisoria linha branca"
            ------------------------------------------------
        */}
        {/*
            ------------------------------------------------
            ## Inicio do componente: "Footer inferior - Texto e Direitos"
            Coelho -> O layout está pronto e completamente responsivo
        */}
        <div className='flex flex-col items-center justify-center max-md:text-center pb-5'>
            <p className=' text-white'>2022 Netlux Solar - Todos os direitos reservados</p>
            <p className='text-white '>Produzido por Deploy.ed</p>
        </div>
        {/*
            ## Fim do componente: "Footer inferior - Texto e Direitos"
            ------------------------------------------------
        */}
    </div>     
  )
    /*
        # Fim do componente: "Footer"
        ------------------------------------------------
    */ 
}

export default Footer