//  ------------------------------------------------
//  # Impotação de componentes auxiliares, bibliotecas e imagens
import React from 'react'
import EdTurquesa from '/src/assets/images/EdTurquesa.png'
import ObraParnaiba from '/src/assets/images/ObraParnaiba.png'
import ObraCaxias from '/src/assets/images/ObraCaxias.png'
//  ------------------------------------------------

const MolduraObra = () => {
    //  ------------------------------------------------
    //  # Estrutura de dados para o carrossel de imagens
    const obras = [
        {
            id: 1,
            titulo: '35kWp - Teresina, PI',
            subtitulo: 'Residencial',
            foto: EdTurquesa
        },
        {
            id: 2,
            titulo: '50kWp - Parnaiba, PI',
            subtitulo: 'Empresarial',
            foto: ObraParnaiba
        },
        {
            id: 3,
            titulo: '20kWp - Caxias, MA',
            subtitulo: 'Rural',
            foto: ObraCaxias
        },
    ]
    //  ------------------------------------------------

    return (
    /*
        ------------------------------------------------
        # Inicio do componente: "Carrossel de imagens"
        Coelho -> Layout está pronto e responsivo.
    */
    <div>
        
        <div className='relative w-full h-fit flex flex-row items-center justify-center max-lg:flex-col max-lg:space-y-12 lg:space-x-[50px]'>
        {obras.map((obra) => (
        <div key={obra.id} className='relative lg:w-[370px] lg:h-[372px] max-lg:w-[300px] max-lg:h-[272px] flex flex-col items-center justify-center bg-orange-500 z-0 rounded-[20px] tw-moldura-carrossel'>
            <div className='flex flex-col items-center justify-center'>
                <div className='lg:mt-[260px] max-lg:mt-[190px]'>
                    <p className='tw-titulo-carrossel'>{obra.titulo}</p>
                    <p className='tw-subtitulo-carrossel'>{obra.subtitulo}</p>
                </div>
            </div>
            <img src={obra.foto} className='absolute z-40 w-[90%] -top-4 drop-shadow-xl rounded-[25px]'/>
        </div>
        ))}
        
        </div>
        
    </div>
    /*
        fim do componente: "Carrossel de imagens"
        ------------------------------------------------
    */
  )
}

export default MolduraObra