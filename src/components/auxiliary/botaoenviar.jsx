//  ------------------------------------------------
//  # Impotação de componentes auxiliares, bibliotecas e imagens
import React from 'react';
//  ------------------------------------------------

const BotaoEnviar = () => {
  /*
    ------------------------------------------------
    # Inicio do componente: "BotaoEnviar"
    Coelho -> O botão está com o layout pronto e completamente responsivo
  */
  return (
    <button method='POST' type="submit" className='bg-[#F68013] hover:bg-orange-600 px-4 py-2 rounded-[30px] text-white font-[600] leading-[24px] text-[16px] shadow w-[222px] h-[65px] drop-shadow-md'>
        FAZER ORÇAMENTO
    </button>
  )
  /*
    # Fim do componente: "BotaoEnviar"
    ------------------------------------------------
  */
}

export default BotaoEnviar