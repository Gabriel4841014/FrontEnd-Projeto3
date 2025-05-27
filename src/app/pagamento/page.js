"use client";

import React, { useState } from 'react';

export default function Pagamento() {
    return (
    <main class="flex w-full max-w-7xl ml-50 ">
    <section class="flex-1 px-8 pt-8 max-w-4xl mt-30">
      <a href="#" class="inline-flex items-center text-[#d9cfc4] text-base font-normal mb-10 select-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="#d9cfc4" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Voltar
      </a>

      <h1 class="text-4xl font-normal mb-10">Finalize sua compra!</h1>

      <div class="flex items-center space-x-6 mb-12">
        <button class="bg-[#22252a] text-[#d9cfc4] text-lg font-normal py-2.5 px-8 rounded-md select-none">PIX</button>
        <div class="h-6 border-l border-[#4a4a4a]"></div>
        <button class="bg-[#22252a] text-[#d9cfc4] text-lg font-normal py-2.5 px-8 rounded-md select-none">Cartão</button>
      </div>

      <h2 class="text-xl font-normal mb-6">Endereço de entrega</h2>

      <div class="flex flex-wrap gap-6">
        <label class="flex items-start space-x-3 max-w-xl">
          <input type="radio" name="address" checked class="mt-1 w-4 h-4 text-[#d9cfc4] bg-black border-[#d9cfc4] focus:ring-[#d9cfc4]" />
          <span class="text-sm leading-tight max-w-xl">
            Rua das Flores, 123 - Bairro Jardim das Acácias<br />
            Belo Horizonte, Minas Gerais, 12345-678
          </span>
        </label>

        <div class="flex flex-col space-y-4">
          <button class="bg-[#22252a] text-[#d9cfc4] text-xs font-normal py-2 px-4 rounded-md flex items-center space-x-2 select-none">
            <span>Adicionar novo endereço</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#d9cfc4" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>

          <div class="flex items-center space-x-6">
            <button class="bg-[#d9cfc4] text-black text-xs font-normal py-2 px-6 rounded-md select-none">Editar</button>
            <div class="h-6 border-l border-[#4a4a4a]"></div>
            <button class="bg-[#d9cfc4] text-black text-xs font-normal py-2 px-6 rounded-md select-none">Excluir</button>
          </div>
        </div>
      </div>
    </section>

    <aside class="w-96 bg-[#e8e2dc] px-10 py-12 text-[#4a1f1f] font-normal text-lg leading-relaxed mt-30">
      <p class="mb-6 text-base">Detalhes da compra</p>
      <p class="text-5xl font-normal mb-10">R$ 900,00</p>

      <div class="space-y-4 mb-10">
        <div class="flex justify-between">
          <span class="text-base">Sacramentos Sabina Syrah</span>
          <span class="text-base font-normal">R$ 400,00</span>
        </div>
        <div class="flex justify-between">
          <span class="text-base">Vinho Branco Salton Virtude</span>
          <span class="text-base font-normal">R$ 150,00</span>
        </div>
        <div class="flex justify-between">
          <span class="text-base">Sacramentos Vinifer</span>
          <span class="text-base font-normal">R$ 350,00</span>
        </div>
      </div>

      <div class="flex justify-between mb-6">
        <span class="text-base">Desconto</span>
        <span class="text-base font-normal">R$ 20,00</span>
      </div>
      <hr class="border-[#4a1f1f] mb-6" />
      <div class="flex justify-between mb-6">
        <span class="text-base">Frete</span>
        <span class="text-base font-normal">R$ 0,00</span>
      </div>
      <div class="flex justify-between">
        <span class="text-base">Total</span>
        <span class="text-base font-normal">R$ 880,00</span>
      </div>
    </aside>
  </main>
    )

}