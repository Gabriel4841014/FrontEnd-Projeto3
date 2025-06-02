import React from 'react';

export default function PagamentoPix() {
    return (
        <main class="flex-grow flex flex-col items-center justify-center px-4 text-center max-w-md mx-auto">
   <h1 class="text-lg mb-2 font-normal">
    Finalize sua compra!
   </h1>
   <p class="text-sm mb-6 leading-relaxed">
    Escaneie o QR Code com o app do seu banco ou copie o código
    <br/>
    Pix e cole no campo de pagamento do seu aplicativo bancário.
   </p>
   <div class="bg-[#e6e0d9] rounded-md p-4 mb-2">
    <img alt="QR Code preto e branco quadrado com padrão pixelado para pagamento Pix" class="w-36 h-36 object-contain" height="150" src="https://storage.googleapis.com/a1aa/image/eb615d06-3db6-4083-2b98-dc584d24b652.jpg" width="150"/>
   </div>
   <p class="text-xs mb-4 select-text">
    7h9XkA3QeH8jVnB2LR6KwZ4TpYpC7J5
   </p>
   <button class="bg-[#1f222a] text-[#d9cfc3] text-sm rounded px-4 py-1 mb-6 hover:bg-[#2a2d38] transition-colors" type="button">
    Copiar o código
   </button>
   <p class="text-xs max-w-xs">
    O pagamento será processado automaticamente em instantes.
   </p>
  </main>
    )


}