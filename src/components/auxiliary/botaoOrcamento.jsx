//  ------------------------------------------------
//  # Impotação de componentes auxiliares, bibliotecas e imagens
import React, {useState} from 'react';
import { Link } from 'react-scroll';
//  ------------------------------------------------

const BotaoOrcamento = () => {
  //  ------------------------------------------------
  //  # Estrutura para lidar com o click do usuário
  const [click, setClick] = React.useState(false);
  //  ------------------------------------------------
  return (
    /*
      ------------------------------------------------
      # Inicio do componente: "BotaoOrcamento"
      Coelho -> O botão está com o layout pronto e completamente responsivo
    */
    <div>
        <button className='bg-[#F68013] hover:bg-orange-600 px-4 py-2 rounded-[30px] text-white font-[600] leading-[24px] text-[16px] shadow w-[222px] h-[65px] drop-shadow-md'>
            <Link onClick={()=>setClick(!click)} to='CONTATO' smooth duration={500} offset=''>
              FAZER ORÇAMENTO
            </Link>     
        </button>
    </div>
    /*
      # Fim do componente: "BotaoOrcamento"
      ------------------------------------------------
    */
  )
}

export default BotaoOrcamento