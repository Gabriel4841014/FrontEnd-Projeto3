'use client';
import React from "react";
import { useRouter } from "next/navigation";

export default function CardProd({ produto }) {
    const router = useRouter();
    
    // Ensure produto has all required properties with default values
    const {
        idProduto = '',
        fotoVinho = '',
        nome = '',
        preco = '0.00',
        categoria = '',
        classificacao = '',
        marca = '',
        regiao = ''
    } = produto || {};

    const handleRedirect = () => {
        if (idProduto) {
            router.push(`/produto/${idProduto}`);
        }
    };

    return (
        <div className="flex justify-between gap-10 mt-2">
            <div className="w-60 h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                <img
                    className="w-48 h-60 ml-auto mr-auto"
                    src={fotoVinho}
                    alt={nome}
                />
                <p className="w-36 h-8 text-[#3F0D09] text-sm font-['Gilda_Display']">
                    {nome}
                </p>
                <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                <div className="flex items-center justify-between">
                    <p className="w-28 h-5 mt-1 text-[#3F0D09] text-2xl font-['Gilda_Display']">
                        R$ {preco}
                    </p>
                    <button
                        onClick={handleRedirect}
                        className="w-8 h-8 text-[#3F0D09] text-[28px] items-center justify-center"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}