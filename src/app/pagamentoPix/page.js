import React from 'react';

export default function PagamentoPix() {
    return (
    <main className="flex-grow flex flex-col items-center justify-center px-4 text-center max-w-md mx-auto">
   <h1 className="text-3xl mt-50 mb-5">
    Finalize sua compra!
   </h1>
   <p className="text-xl mb-6 leading-relaxed w-200">
    Escaneie o QR Code com o app do seu banco ou copie o código
    <br/>
    Pix e cole no campo de pagamento do seu aplicativo bancário.
   </p>
   <div className="bg-[#e6e0d9] rounded-md p-4 mb-2">
    <img alt="QR Code preto e branco quadrado com padrão pixelado para pagamento Pix" className="w-36 h-36 object-contain" height="150" src="https://storage.googleapis.com/a1aa/image/eb615d06-3db6-4083-2b98-dc584d24b652.jpg" width="150"/>
   </div>
   <p className="text-xs mb-4 select-text">
    7h9XkA3QeH8jVnB2LR6KwZ4TpYpC7J5
   </p>
   <button className="bg-[#1f222a] text-[#d9cfc3] text-sm rounded px-4 py-1 mb-6 hover:bg-[#2a2d38] transition-colors" type="button">
    Copiar o código
   </button>
   <p className="text-xl w-200 max-w-xs mb-50">
    O pagamento será processado automaticamente em instantes.
   </p>
  </main>
    )
}