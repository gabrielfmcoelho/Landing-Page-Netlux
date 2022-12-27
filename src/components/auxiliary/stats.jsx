import React from 'react'

const Stats = () => {
  const estatisticas = [
    {
      id: 1,
      titulo: '+ 500 kWp',
      texto: 'INSTALADOS',
      linha: 'tw-linha-stats',
      espacamento: 'space-x-[25px]'
    },
    {
      id: 2,
      titulo: '+ R$ 1.000.000,00',
      texto: 'ECONOMIZADO PARA NOSSOS CLIENTES',
      linha: 'tw-linha-stats',
      espacamento: 'space-x-[25px]'
    },
    {
      id: 3,
      titulo: '+ 150 Clientes',
      texto: 'SATISFEITOS',
      linha: '',
      espacamento: ''
    }
  ]

  return (
    <div className='flex flex-row items-center justify-center space-x-[25px]'>
      {estatisticas.map((estatistica) => (
        <div key={estatistica.id} className={`flex flex-row items-center justify-center ${estatistica.espacamento}`}>
          <div className='flex flex-col items-center'>
            <h4 className='tw-titulo-stats'>{estatistica.titulo}</h4>
            <p className='tw-texto-stats'>{estatistica.texto}</p>
          </div>
          <div className={estatistica.linha}></div>
        </div>
      ))}
    </div>
  )
}

export default Stats