"use client";

import React, { useState } from 'react';
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import BtnVoltar from "@/components/BtnVoltar";
import { FaArrowLeft } from "react-icons/fa6";

export default function Contato() {

  // State to manage accordion open/close
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index); // Toggle the accordion
  };

  return (
    <div className="bg-black text-[#d6c9b9] min-h-screen flex flex-col items-center px-4 py-8">
      <header className="w-full -mt-3 mb-20 mr-8">
        <BtnVoltar />
      </header>

      <section className="w-full max-w-4xl flex flex-col items-center space-y-10">
        <div className="text-center text-[#E1D5C2] font-light mb-20 text-3xl max-w-2xl">
          Dúvidas? Entre em contato e vamos te ajudar!
        </div>
        <div className="w-full max-w-3xl flex justify-center gap-16 text-center text-[#d6c9b9]">
          <div className="flex flex-col items-center max-w-[120px]">
            <p className='text-[30px] mb-5'>  <BsTelephone /> </p>
            <span className="mt-1 text-[16px] text-[#EAE5E1] leading-tight">(12) 9 8202-1943</span>
          </div>
          <div className="flex flex-col items-center max-w-[200px] border-l border-r border-[#d6c9b9] px-6">
            <p className='text-[30px] mb-5'> <IoLocationOutline /> </p>
            <span className="mt-1 text-[16px] text-[#EAE5E1] w-40 leading-tight">
              Rua Mário Salton, 300 -<br />
              Bento Gonçalves, RS
            </span>
          </div>
          <div className="flex flex-col items-center max-w-[120px]">
            <p className='text-[30px] mb-5'> <MdOutlineEmail /> </p>
            <span className="mt-1 text-[16px] text-[#EAE5E1] leading-tight">vivant.contato@gmail.com</span>
          </div>
        </div>
        <div className="text-center text-[#d6c9b9] mt-20 font-light text-3xl max-w-2xl">
          Escreva uma mensagem para nós!
        </div>


        <form
          className="w-full max-w-6xl bg-[#22272f] rounded-lg p-6 space-y-4"
          action="#"
          method="POST"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-[18px] mb-1">Nome</label>
              <input
                type="text"
                name="nome"
                placeholder="Digite seu nome..."
                className="bg-[#e9e5e1] text-black text-base h-10 rounded px-3 py-2 placeholder:text-sm placeholder:text-[#7a7a7a] outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[18px] mb-1">Sobrenome</label>
              <input
                type="text"
                name="sobrenome"
                placeholder="Digite seu sobrenome..."
                className="bg-[#e9e5e1] text-black text-xs h-10 rounded px-3 py-2 placeholder:text-sm placeholder:text-[#7a7a7a] outline-none"
                required
              />
            </div>
          </div>

          <div className="grid mt-3 grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-[18px] mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="exemplo@gmail.com"
                className="bg-[#e9e5e1] text-black text-xs h-10 rounded px-3 py-2 placeholder:text-sm placeholder:text-[#7a7a7a] outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[18px] mb-1">Assunto</label>
              <input
                type="text"
                name="assunto"
                placeholder="Digite o assunto..."
                className="bg-[#e9e5e1] text-black text-xs h-10 rounded px-3 py-2 placeholder:text-sm placeholder:text-[#7a7a7a] outline-none"
                required
              />
            </div>
          </div>

          <div className="flex flex-col mt-10">
            <textarea
              name="mensagem"
              rows="6"
              placeholder="Escreva sua mensagem aqui..."
              className="bg-[#e9e5e1] text-black text-xs rounded h-50 px-3 py-2 placeholder:text-sm placeholder:text-[#7a7a7a] resize-none w-full outline-none"
              required
            ></textarea>
          </div>

          <p className="text-[16px] text-[#7a7a7a] font-light">
            Por favor, coloque o máximo de informações possível.
          </p>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#d6c9b9] text-black text-[18px] mt-5 rounded-[7px] px-6 py-2 font-light hover:bg-[#c1b49e] transition-colors"
            >
              Confirmar e enviar
            </button>
          </div>
        </form>

        {/* Accordion Section */}
        <div className="bg-black w-full py-10 flex flex-col sm:flex-row justify-between items-start gap-10">
          <div className="flex-1 sm:w-1/2">
            <h2 className="text-3xl text-[#E1D5C2] sm:text-3xl font-serif mb-6">Perguntas Frequentes</h2>

            <div className="space-y-6 text-sm sm:text-lg">
              {[
                {
                  question: 'Quais são os métodos de pagamento disponíveis?',
                  answer: 'Aceitamos diversas formas de pagamento, incluindo cartões de crédito (Visa, MasterCard, American Express), pix, boletos bancários e plataformas como o PayPal. O pagamento é totalmente seguro, e você pode escolher a opção mais conveniente para você.'
                },
                {
                  question: 'Vocês entregam para todo o Brasil?',
                  answer: 'Sim! Fazemos entregas para todas as regiões do Brasil. O tempo de entrega varia de acordo com o local, o valor do frete é calculado no momento da compra, levando em consideração a distância e a quantidade de produtos adquiridos.'
                },
                {
                  question: 'Os vinhos possuem selo de qualidade?',
                  answer: 'Todos os nossos vinhos são certificados e seguem rigorosos padrões de qualidade. Trabalhamos apenas com produtores reconhecidos e vinícolas que respeitam os processos de fabricação de excelência.'
                },
                {
                  question: 'Os vinhos têm garantia ou política de devolução?',
                  answer: 'Sim. Você pode solicitar a devolução em até 7 dias após o recebimento do pedido, conforme o Código de Defesa do Consumidor. O produto deve estar lacrado e em perfeitas condições.'
                },
               
              ].map((item, index) => (
                <div key={index} className="border-b border-[#3a3a3a]">
                  <button onClick={() => toggleAccordion(index)} className="w-full flex justify-between items-center py-5 text-[#E1D5C2] text-left">
                    <span>{item.question}</span>
                    <span className="text-[#E1D5C2] transition-transform duration-300">
                      {openAccordion === index ? '-' : '+'}
                    </span>
                  </button>
                  {openAccordion === index && (
                    <div className="pb-5 text-[#d1d1d1] text-base">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 min-h-123  sm:w-1/2 flex justify-center mb-15">
            <img
              src="img_faq.png"
              alt="Vinho sendo servido"
              className="rounded-md w-full object-cover object-[35%_80%] "
            />
          </div>
        </div>
      </section>
    </div>
  );
}
