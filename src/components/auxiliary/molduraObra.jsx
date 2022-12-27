import React from 'react'
import EdTurquesa from '/src/assets/images/EdTurquesa.png'
import ObraParnaiba from '/src/assets/images/ObraParnaiba.png'
import ObraCaxias from '/src/assets/images/ObraCaxias.png'

const MolduraObra = () => {

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

    return (
    <div className='flex flex-row space-x-[50px] items-center justify-center'>
        {obras.map((obra) => (
            <div key={obra.id} className='tw-carrosssel flex flex-col items-center justify-center'>
                <div className='tw-moldura-carrossel'>
                    <div className='mt-[260px]'>
                        <p className='tw-titulo-carrossel'>{obra.titulo}</p>
                        <p className='tw-subtitulo-carrossel'>{obra.subtitulo}</p>
                    </div>
                </div>
                <img src={obra.foto} className='tw-foto-carrossel'/>
            </div>
        ))}
    </div>
  )
}

export default MolduraObra