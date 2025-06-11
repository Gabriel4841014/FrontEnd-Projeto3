"use client";
import BtnVoltar from '@/components/BtnVoltar';
import React from 'react';

export default function PagamentoPix() {
    return (
    <main className="flex-grow flex flex-col items-center justify-center px-4 text-center max-w-3xl">
   
    <header className="w-full flex justify-start items-center mt-5 mr-8"> 
        <BtnVoltar />
    </header>
   <div className='ml-290'>

    <h1 className="text-3xl mt-30 mb-5"> 
        Finalize sua compra!
    </h1>
    <p className="text-xl mb-6 leading-relaxed w-200">
        Escaneie o QR Code com o app do seu banco ou copie o código
        <br/>
        Pix e cole no campo de pagamento do seu aplicativo bancário.
    </p>
    <div className="p-4 mb-2">
        <img alt="QR Code preto e branco quadrado com padrão pixelado para pagamento Pix" className="ml-70 w-50 h-50 rounded-md" src="qrCodePix.png"/>
    </div>
    <p className="text-xs mb-4 select-text">
        7h9XkA3QeH8jVnB2LR6KwZ4TpYpC7J5
    </p>
    <button className="bg-[#1f222a] text-[#d9cfc3] text-xl rounded px-6 py-3 mb-6 hover:bg-[#2a2d38] transition-colors" type="button">
        Copiar o código
    </button>
    <p className="text-lg mb-50">
        O pagamento será processado automaticamente em instantes.
    </p>
   </div>
</main>
    )
}