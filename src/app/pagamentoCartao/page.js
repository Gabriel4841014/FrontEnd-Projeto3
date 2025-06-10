"use client";
import BtnVoltar from '@/components/BtnVoltar';
import React, { useState } from 'react'; // 1. Importamos o useState

export default function PagamentoCartao() {

    // 2. Criamos um estado para saber qual parcela está selecionada
    const [parcelaSelecionada, setParcelaSelecionada] = useState(null); // Inicia como nulo (nenhuma selecionada)

    // Lista de opções de parcelamento para não repetir código
    const opcoesDeParcelamento = [
        { parcelas: 1, valor: 'R$ 880,00' },
        { parcelas: 2, valor: 'R$ 440,00' },
        { parcelas: 3, valor: 'R$ 293,33' },
        { parcelas: 4, valor: 'R$ 220,00' },
        { parcelas: 5, valor: 'R$ 176,00' },
        { parcelas: 6, valor: 'R$ 146,66' },
    ];

    return (
        <main className="flex flex-col items-center w-full max-w-7xl mx-auto">

            <header className="w-full flex justify-start items-center mt-5 mr-158">
                <BtnVoltar />
            </header>

            <h1 className="text-2xl sm:text-3xl mb-4 -mt-30">
                Finalize sua compra!
            </h1>
            <p className="mb-12 text-center text-sm sm:text-base max-w-xl">
                Preencha os dados do cartão (número, validade, CVV e nome).
            </p>
            <form className="w-full flex flex-col sm:flex-row justify-between gap-12 max-w-7xl">
                <section className="flex-1 max-w-lg space-y-6">
                    <div>
                        <label className="block mb-1 text-sm sm:text-base font-normal text-[#d9cfc6]" htmlFor="nome">
                            Nome do Titular do Cartão
                        </label>
                        <input className="w-full rounded-md bg-[#e9e3de] text-[#a88a7e] text-base sm:text-lg font-normal px-4 py-3 placeholder-[#a88a7e] focus:outline-none" id="nome" type="text" defaultValue="PAULINA CHIMAROKE" />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm sm:text-base font-normal text-[#d9cfc6]" htmlFor="numero">
                            Número do Cartão
                        </label>
                        <div className="flex items-center rounded-md bg-[#e9e3de] px-4 py-3">
                            <img alt="Ícones das bandeiras Mastercard e Visa lado a lado" className="mr-3" height="24" src="https://storage.googleapis.com/a1aa/image/b64505d3-c68b-4b3e-5a6b-2cf2fb3a44fe.jpg" width="24" />
                            <input className="bg-transparent w-full text-[#a88a7e] text-base sm:text-lg font-normal focus:outline-none" id="numero" type="text" defaultValue="9870 3456 7890 6473" />
                        </div>
                    </div>
                    <div className="flex gap-8 max-w-xs">
                        <div className="flex-1">
                            <label className="block mb-1 text-sm sm:text-base font-normal text-[#d9cfc6]" htmlFor="validade">
                                Validade
                            </label>
                            <input className="w-full rounded-md bg-[#e9e3de] text-[#a88a7e] text-base sm:text-lg font-normal px-4 py-3 placeholder-[#a88a7e] focus:outline-none" id="validade" type="text" defaultValue="03 / 25" />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-1 text-sm sm:text-base font-normal text-[#d9cfc6]" htmlFor="cvc">
                                CVC
                            </label>
                            <input className="w-full rounded-md bg-[#e9e3de] text-[#a88a7e] text-base sm:text-lg font-normal px-4 py-3 placeholder-[#a88a7e] focus:outline-none" id="cvc" type="text" defaultValue="654" />
                        </div>
                    </div>
                </section>

                {/* INÍCIO DA SEÇÃO MODIFICADA */}
                <section className="flex-1 max-w-md mb-80">
                    <p className="mb-6 text-center text-sm sm:text-base font-normal">
                        Pagamento em parcelado
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {opcoesDeParcelamento.map((opcao) => {
                            const isSelecionada = parcelaSelecionada === opcao.parcelas;
                            return (
                                <button
                                    key={opcao.parcelas}
                                    type="button"
                                    onClick={() => setParcelaSelecionada(opcao.parcelas)}
                                    // 3. O estilo do botão muda se ele estiver selecionado
                                    className={`rounded-md py-3 px-6 text-left text-base sm:text-lg font-normal transition-colors duration-200 ${
                                        isSelecionada
                                            ? 'bg-[#a88a7e] text-white ring-2 ring-offset-2 ring-[#a88a7e]' // Estilo SELECIONADO
                                            : 'bg-[#e9e3de] text-[#a88a7e]' // Estilo PADRÃO
                                    }`}
                                >
                                    {opcao.parcelas}x
                                    <span className="float-right">
                                        {opcao.valor}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </section>
                {/* FIM DA SEÇÃO MODIFICADA */}
            </form>
        </main>
    )
}