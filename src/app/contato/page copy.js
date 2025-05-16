import React from 'react';
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";

export default function Contato() {
    return (

        <div className="bg-black text-[#d6c9b9] min-h-screen flex flex-col items-center px-4 py-8">

            <header className="w-full mt-15 mb-20 ml-5">
                <a href="/" className=" text-[#d6c9b9] text-2xl flex mb-6 items-center">
                    <FaArrowLeft />
                    <span className='ml-2 '>Voltar</span>
                </a>
            </header>




            <section className="w-full max-w-4xl flex flex-col items-center space-y-10">
                <div className="text-center text-[#E1D5C2] font-light mb-10 text-2xl max-w-2xl">
                    Dúvidas? Entre em contato e vamos te ajudar!
                 </div>
                 <div className="w-full max-w-3xl flex justify-center gap-16 text-center text-[#d6c9b9] font-light text-xs sm:text-sm">
                    <div className="flex flex-col items-center max-w-[120px]">
                        <p className='text-[30px] mb-5'>  <BsTelephone /> </p>
                        <span className="mt-1 text-[14px] text-[#EAE5E1] leading-tight">(12) 9 8202-1943</span>
                    </div>
                    <div className="flex flex-col items-center max-w-[170px] border-l border-r border-[#d6c9b9] px-6">
                        <p className='text-[30px] mb-5'> <IoLocationOutline /> </p>
                        <span className="mt-1 text-[14px] text-[#EAE5E1] w-40 leading-tight">
                            Rua Mário Salton, 300 -<br />
                            Bento Gonçalves, RS
                        </span>
                    </div>
                    <div className="flex flex-col items-center max-w-[120px]">
                        <p className='text-[30px] mb-5'> <MdOutlineEmail /> </p>
                        <span className="mt-1 text-[14px] text-[#EAE5E1] leading-tight">vivant.contato@gmail.com</span>
                    </div>
                 </div>
                 <div className="text-center text-[#d6c9b9] mt-20 font-light text-xl max-w-2xl">
                    Escreva uma mensagem para nós!
                </div>




                <form
                    className="w-full max-w-3xl bg-[#22272f] rounded-lg p-6 space-y-4"
                    action="#"
                    method="POST"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="text-xs mb-1">Nome</label>
                            <input
                                type="text"
                                name="nome"
                                placeholder="Digite seu nome..."
                                className="bg-[#e9e5e1] text-black text-xs h-10 rounded px-3 py-2 placeholder:text-xs placeholder:text-[#7a7a7a]"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs mb-1">Sobrenome</label>
                            <input
                                type="text"
                                name="sobrenome"
                                placeholder="Digite seu sobrenome..."
                                className="bg-[#e9e5e1] text-black text-xs h-10 rounded px-3 py-2 placeholder:text-xs placeholder:text-[#7a7a7a]"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid mt-3 grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="text-xs mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="exemplo@gmail.com"
                                className="bg-[#e9e5e1] text-black text-xs h-10 rounded px-3 py-2 placeholder:text-xs placeholder:text-[#7a7a7a]"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xs mb-1">Assunto</label>
                            <input
                                type="text"
                                name="assunto"
                                placeholder="Digite o assunto..."
                                className="bg-[#e9e5e1] text-black text-xs h-10 rounded px-3 py-2 placeholder:text-xs placeholder:text-[#7a7a7a]"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mt-10">
                        <textarea
                            name="mensagem"
                            rows="6"
                            placeholder="Escreva sua mensagem aqui..."
                            className="bg-[#e9e5e1] text-black text-xs rounded h-50 px-3 py-2 placeholder:text-xs placeholder:text-[#7a7a7a] resize-none w-full"
                            required
                        ></textarea>
                    </div>

                    <p className="text-[10px] text-[#7a7a7a] font-light">
                        Por favor, coloque o máximo de informação possível.
                    </p>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-[#d6c9b9] text-black text-xs rounded-[7px] px-6 py-2 font-light hover:bg-[#c1b49e] transition-colors"
                        >
                            Confirmar e enviar
                        </button>
                    </div>
                </form>

                <div className="bg-black text-white py-10 px-6 sm:px-20 flex flex-col sm:flex-row justify-between items-start gap-10">




                   <div className="w-full sm:w-1/2">
                     <h2 className="text-2xl text-[#E1D5C2] sm:text-3xl font-serif mb-6">Perguntas Frequentes</h2>
                  
                     <div className="space-y-6 text-sm sm:text-base">
                       <div>
                         <h3 className="flex justify-between items-center w-100 text-[#E1D5C2]">
                           Quais são os métodos de pagamento disponíveis?
                         </h3>
                         <p className="text-[#d1d1d1] mt-2">
                           Aceitamos diversas formas de pagamento, incluindo cartões de crédito (Visa, MasterCard, American Express), pix, boletos bancários e plataformas como o PayPal. O pagamento é totalmente seguro, e você pode escolher a opção mais conveniente para você.
                         </p>
                         <hr className="border-[#3a3a3a] mt-4" />
                       </div>
                  
                       <div>
                         <h3 className=" flex justify-between text-[#E1D5C2] items-center">
                           Vocês entregam para todo o Brasil?
                         </h3>
                         <p className="text-[#d1d1d1] mt-2">
                           Sim! Fazemos entregas para todas as regiões do Brasil. O tempo de entrega varia de acordo com o local, o valor do frete é calculado no momento da compra, levando em consideração a distância e a quantidade de produtos adquiridos.
                         </p>
                         <hr className="border-[#3a3a3a] mt-4" />
                       </div>
                  
                       <div>
                         <h3 className="text-[#E1D5C2] flex justify-between items-center">
                           Os vinhos possuem selo de qualidade?
                         </h3>
                         <p className="text-[#d1d1d1] mt-2">
                           Todos os nossos vinhos são certificados e seguem rigorosos padrões de qualidade. Trabalhamos apenas com produtores reconhecidos e vinícolas que respeitam os processos de fabricação de excelência.
                         </p>
                         <hr className="border-[#3a3a3a] mt-4" />
                       </div>
                     </div>
                   </div>
                  
                  
                   <div className="w-full h-168 sm:w-1/2 flex justify-center">
                     <img
                       src="img_faq.png"
                       alt="Vinho sendo servido"
                       className="rounded-md object-cover object-[35%_80%] "
                     />
                   </div>
                </div>
  

            </section>
        </div>
    )
}