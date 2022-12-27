//  ------------------------------------------------
//  # Impotação de componentes auxiliares, bibliotecas e imagens
import React from 'react'
import BotaoOrcamento from '../auxiliary/botaoOrcamento'
import Footer from '../auxiliary/footer'
//  ------------------------------------------------


const Contato = () => {
  return (
    /*
        ------------------------------------------------
        # Inicio da seção: "Contato"
    */
    <section className='w-full h-fit tw-background-footer max-md:pt-[50px]'>
        {/*
            ------------------------------------------------
            ## Título e texto de contato
            Coelho -> Já está com layout responsivo e pronto.
        */}
        <div className='flex flex-col justify-center items-center text-center text-black pt-[50px] max-w-screen-lg mx-auto h-full max-md:p-4 space-y-2'>
            <h1 className='tw-titulo-contato max-md:text-left'>
                Quer qualidade e experiencia no seu projeto?
            </h1>
            <p className='tw-texto-contato max-md:text-left'>
                Preencha o formulário abaixo que entraremos em contato em até 24 horas para conversarmos sobre a simulação do seu orçamento e solucionar quaisquer dúvidas sobre o seu projeto.
            </p>
        </div>
        {/* ------------------------------------------------ */}
        {/*
            ------------------------------------------------
            ## Formulário de contato
            Coelho -> Já está com layout responsivo e pronto, mas precisa colocar a key da API no parametro action do form.
        */}
        <form action='' method='POST' className='flex flex-col items-center justify-center max-w-screen-2xl mx-auto h-full space-y-2 p-4 pt-[50px]'>
            <div className='md:grid md:grid-cols-2 md:gap-2 w-full md:w-1/2 flex flex-col max-md:space-y-2'>
                <input type="text" placeholder='Nome e Sobrenome' class="form-input tw-campo-formulario-pd focus:outline-none" />
                <input type="email" placeholder='Email' class="form-input tw-campo-formulario-pd focus:outline-none" />
                <input type="tel" placeholder='Telefone' class="form-input tw-campo-formulario-pd focus:outline-none" />
                <input type="text" placeholder='Qual seu gasto médio com energia ?' class="form-input tw-campo-formulario-pd focus:outline-none" />
            </div>
            <textarea type="message" rows='10' placeholder='Nos conte um pouco sobre o que você está buscando' class="form-textarea tw-campo-formulario-pd focus:outline-none w-full md:w-1/2" />
        </form>
        {/*
            ### Botão de envio do formulário
            Coelho -> Já está com layout pronto com responsividade, mas precisa configurar a ação de POST do formulário.
        */}
        <div className='pt-[2px] pb-[15px] flex flex-col max-md:items-center max-xl:justify-center items-center xl:-translate-x-[220px] max-w-screen-2xl mx-auto h-full'>
            <BotaoOrcamento/>
        </div>
        {/* ------------------------------------------------ */}
        {/*
            ------------------------------------------------
            ## Footer
            Coelho -> Falta revisar o codigo do footer e acrescentar responsividade.
        */}
        <div>

        </div>
        {/* ------------------------------------------------ */}
    </section>
    /*
        Fim da seção: "Contato"
        ------------------------------------------------
    */
  )
}

export default Contato