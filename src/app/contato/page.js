import React from 'react';
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export default function Contato() {
    return (

        <div className="bg-black text-[#d6c9b9] min-h-screen flex flex-col items-center px-4 py-8">
            <header className="w-full max-w-4xl mb-8">
                <a href="#" className="inline-flex items-center text-[#d6c9b9] text-sm font-light mb-6 hover:underline">
                    <i className="fas fa-arrow-left mr-2"></i> Voltar
                </a>
            </header>

            <section className="w-full max-w-4xl flex flex-col items-center space-y-10">
                <div className="text-center text-[#E1D5C2] font-light mb-10 text-2xl max-w-2xl">
                    Dúvidas? Entre em contato e vamos te ajudar!
                </div>

                <div className="w-full max-w-3xl flex justify-center gap-16 text-center text-[#d6c9b9] font-light text-xs sm:text-sm">
                    <div className="flex flex-col items-center max-w-[120px]">

                        <p className='text-[30px] mb-5'>  <BsTelephone /> </p>
                        <span className="mt-1 text-[12px] text-[#EAE5E1] leading-tight">(12) 9 8202-1943</span>
                    </div>
                    <div className="flex flex-col items-center max-w-[170px] border-l border-r border-[#d6c9b9] px-6">

                        <p className='text-[30px] mb-5'> <IoLocationOutline /> </p>
                        <span className="mt-1 text-[12px] text-[#EAE5E1] w-40 leading-tight">
                            Rua Mário Salton, 300 -<br />
                            Bento Gonçalves, RS
                        </span>
                    </div>
                    <div className="flex flex-col items-center max-w-[120px]">

                        <p className='text-[30px] mb-5'> <MdOutlineEmail /> </p>
                        <span className="mt-1 text-[12px] text-[#EAE5E1] leading-tight">vivant.contato@gmail.com</span>
                    </div>
                </div>

                <div className="text-center text-[#d6c9b9] mt-20 font-light text-xl max-w-2xl">
                    Escreva uma mensagem para nós!
                </div>

                <form
                    className="w-full max-w-3xl h-120 bg-[#22272f] rounded-lg p-6 space-y-4"
                    action="#"
                    method="POST"
                >
                    <div className="grid relative grid-cols-1 h-10 sm:grid-cols-2 gap-4">
                        <label className='absolute top-[-1.5rem]'>Nome</label>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Digite seu nome..."
                            className="bg-[#e9e5e1] text-black text-xs rounded px-3 py-2 placeholder:text-xs placeholder:text-[#7a7a7a]"
                            required
                        />
                        <input
                            type="text"
                            name="sobrenome"
                            placeholder="Digite seu sobrenome..."
                            className="bg-[#e9e5e1] text-black text-xs rounded px-3 py-2 placeholder:text-xs placeholder:text-[#7a7a7a]"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 h-10 sm:grid-cols-2 gap-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="exemplo@gmail.com"
                            className="bg-[#e9e5e1] text-black text-xs rounded px-3 py-2 placeholder:text-xs placeholder:text-[#7a7a7a]"
                            required
                        />
                        <input
                            type="text"
                            name="assunto"
                            placeholder="Digite o assunto..."
                            className="bg-[#e9e5e1] text-black text-xs rounded px-3 py-2 placeholder:text-xs placeholder:text-[#7a7a7a]"
                            required
                        />
                    </div>
                    <textarea
                        name="mensagem"
                        rows="6"
                        placeholder="Escreva sua mensagem aqui..."
                        className="bg-[#e9e5e1] text-black text-xs h-50 rounded px-3 py-2 mb-1 placeholder:text-xs placeholder:text-[#7a7a7a] resize-none w-full"
                        required
                    ></textarea>
                    <p className="text-[10px]  text-[#7a7a7a] font-light">
                        Dar favor, coloque o máximo de informação possível.
                    </p>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-[#d6c9b9] text-black text-xs rounded px-6 py-1 font-light hover:bg-[#c1b49e] transition-colors"
                        >
                            Confirmar e enviar
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}