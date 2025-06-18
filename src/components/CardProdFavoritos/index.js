'use client';
import React from "react";
import { useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa";
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
                    <div className="grid grid-cols-2 gap-2 items-center justify-center">
                        <button
                            onClick={handleRedirect}
                            className="cursor-pointer"
                        > <FaHeart className="size-4 text-red-700" />
                        </button>

                        <button
                            onClick={handleRedirect}
                            className="text-[#3F0D09] text-[40px] cursor-pointer justify-center"
                        > +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}