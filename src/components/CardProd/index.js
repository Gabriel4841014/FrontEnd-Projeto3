'use client';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function CardProd({ produto }) {
    const router = useRouter();
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

    const [favorited, setFavorited] = useState(false);

    // Load favorite state from cookies
    useEffect(() => {
        const favs = Cookies.get('favoritos');
        if (favs) {
            const favArray = JSON.parse(favs);
            setFavorited(favArray.includes(idProduto));
        }
    }, [idProduto]);

    // Toggle favorite and update cookies and API
    const handleFavorite = async (e) => {
        e.stopPropagation();
        const favs = Cookies.get('favoritos');
        let favArray = favs ? JSON.parse(favs) : [];
        const accessToken = Cookies.get('accessToken');
        let usuarioCpf = null;
        if (accessToken) {
            try {
                const payload = JSON.parse(atob(accessToken.split('.')[1]));
                usuarioCpf = payload.cpf;
            } catch {}
        }

        if (!usuarioCpf) {
            alert("Você precisa estar logado para favoritar.");
            return;
        }

        if (favorited) {
            favArray = favArray.filter(id => id !== idProduto);
            // Aqui você pode implementar o DELETE se desejar remover do backend também
        } else {
            favArray.push(idProduto);
            // Envia POST para a API de favoritos
            try {
                await fetch("https://localhost:8000/favoritos", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        usuarioCpf,
                        idProduto
                    })
                });
            } catch (error) {
                alert("Erro ao favoritar produto.");
            }
        }
        Cookies.set('favoritos', JSON.stringify(favArray), { expires: 365 });
        setFavorited(!favorited);
    };

    const handleRedirect = () => {
        if (idProduto) {
            router.push(`/produto/${idProduto}`);
        }
    };

    return (
        <div className="flex justify-between gap-10 mt-2">
            <div className="w-60 h-auto bg-[#EAE5E1] rounded-[5px] p-6 relative">
                <button
                    onClick={handleFavorite}
                    className="absolute top-4 right-4 text-2xl"
                    aria-label="Favoritar"
                >
                    {favorited
                        ? <AiFillHeart color="#e63946" />
                        : <AiOutlineHeart color="#3F0D09" />
                    }
                </button>
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
                        className="w-8 h-8 text-[#3F0D09] text-[30px] items-center cursor-pointer justify-center"
                    > +
                    </button>
                </div>
            </div>
        </div>
    );
}