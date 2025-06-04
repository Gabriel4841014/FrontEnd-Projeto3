'use client'

import { GoTrash } from "react-icons/go";
import React, { useState } from 'react';

export function Itens() {
  
  const [quantidade, setQuantidade] = useState(1);

 
  const handleAumentar = () => {
    setQuantidade(quantidadeAnterior => quantidadeAnterior + 1);
  };

  
  const handleDiminuir = () => {
    
    if (quantidade > 1) {
      setQuantidade(quantidadeAnterior => quantidadeAnterior - 1);
    }
  };
  
  
  const quantidadeFormatada = String(quantidade).padStart(2, '0');

  return (
    <li className="bg-[#22272f] rounded-lg p-4 flex items-center gap-6 max-w-3xl w-full">
      <div className="border border-white rounded-md w-20 h-24 overflow-hidden">
        <img 
          alt="Garrafa de vinho tinto Sacramentos Sabina Syrah com rótulo vermelho" 
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/a1aa/image/cb99781b-a38f-482c-2094-71c5c3849943.jpg" 
        />
      </div>
      
      <div className="flex flex-col flex-grow text-xs md:text-lg">
        <span className="leading-tight max-w-[180px] md:max-w-[220px]">
          Sacramentos Sabina Syrah
        </span>
        <span className="mt-1">
          Vinho tinto
        </span>
      </div>
      
      
      <div className="flex items-center gap-2 text-xs md:text-base select-none">
        
        <button 
          onClick={handleDiminuir} 
          aria-label="Diminuir quantidade" 
          className="text-[#d9cdbf] hover:text-[#f0e6d2] transition text-lg"
          disabled={quantidade <= 1} 
        >
          −
        </button>
        
        
        <span className="w-6 text-center">
          {quantidadeFormatada}
        </span>
        
        
        <button 
          onClick={handleAumentar} 
          aria-label="Adicionar quantidade" 
          className="text-[#d9cdbf] hover:text-[#f0e6d2] transition text-lg"
        >
          +
        </button>
      </div>
      
      <span className="text-xs md:text-lg flex items-center">
       
        <span> R$500 </span>
        <GoTrash className="ml-5" />
      </span>
      
      <button aria-label="Remover item" className="text-[#d9cdbf] hover:text-[#f0e6d2] transition ml-4">
        <i className="fas fa-trash-alt"></i>
      </button>
    </li>
  );
}

export default Itens;