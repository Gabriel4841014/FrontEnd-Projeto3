"use client";
import { FaArrowLeft } from "react-icons/fa6";
import React, { useState } from 'react';
import BtnVoltar from "@/components/BtnVoltar";

export default function Pagamento() {
    return (
    <main className="flex w-full max-w-7xl">


      <header className="mt-5 mr-10">
      <BtnVoltar />
      </header>


    <section className="flex-1 px-8 pt-8 mt-30">

      <h1 className="text-3xl mb-10">Finalize sua compra!</h1>

      <div className="flex items-center space-x-6 mb-12">
        <a href="/pagamentoPix" className="flex items-center space-x-2">
        <button className="bg-[#22252a] text-[#d9cfc4] text-lg font-normal py-2.5 px-8 rounded-md select-none">PIX</button>
        </a>

        <div className="h-6 border-l border-[#4a4a4a]"></div>
        <a href="/pagamentoCartao" className="flex items-center space-x-2">
        <button className="bg-[#22252a] text-[#d9cfc4] text-lg font-normal py-2.5 px-8 rounded-md select-none">Cartão</button>

        </a>
      </div>

      <h2 className="text-xl font-normal mb-6">Endereço de entrega</h2>

      <div className="flex flex-wrap gap-6">
        <label className="flex items-start space-x-3 max-w-xl">
          <input type="radio" name="address" className="mt-1 w-4 h-4 text-[#d9cfc4] bg-black border-[#d9cfc4] focus:ring-[#d9cfc4]" />
          <span className="text-sm leading-tight max-w-xl">
            Rua das Flores, 123 - Bairro Jardim das Acácias<br />
            Belo Horizonte, Minas Gerais, 12345-678
          </span>
        </label>

        <div className="flex flex-col space-y-4 ml-5 gap-3 -mt-11">
          <button className="bg-[#22252a] text-[#d9cfc4] text-xs font-normal py-2 px-4 rounded-md flex items-center space-x-2 select-none">
            <span>Adicionar novo endereço</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#d9cfc4" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>

          <div className="flex items-center space-x-6">
            <button className="bg-[#d9cfc4] text-black text-xs font-normal py-2 px-6 rounded-md select-none">Editar</button>
            <div className="h-6 border-l border-[#4a4a4a]"></div>
            <button className="bg-[#d9cfc4] text-black text-xs font-normal py-2 px-6 rounded-md select-none">Excluir</button>
          </div>
        </div>

      </div>
    </section>

    <aside className="w-95 bg-[#e8e2dc] px-10 py-12 text-[#4a1f1f] text-lg mt-30">
      <p className="mb-6 text-base">Detalhes da compra</p>
      <p className="text-5xl font-normal mb-10">R$ 900,00</p>

      <div className="space-y-4 mb-10">
        <div className="flex justify-between">
          <span className="text-base">Sacramentos Sabina Syrah</span>
          <span className="text-base font-normal">R$ 400,00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-base">Vinho Branco Salton Virtude</span>
          <span className="text-base font-normal">R$ 150,00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-base">Sacramentos Vinifer</span>
          <span className="text-base font-normal">R$ 350,00</span>
        </div>
      </div>

      <div className="flex justify-between mb-6">
        <span className="text-base">Desconto</span>
        <span className="text-base font-normal">R$ 20,00</span>
      </div>
      <hr className="border-[#4a1f1f] mb-6" />
      <div className="flex justify-between mb-6">
        <span className="text-base">Frete</span>
        <span className="text-base font-normal">R$ 0,00</span>
      </div>
      <div className="flex justify-between">
        <span className="text-base">Total</span>
        <span className="text-base font-normal">R$ 880,00</span>
      </div>
    </aside>
  </main>
    )
}