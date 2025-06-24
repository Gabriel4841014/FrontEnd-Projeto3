'use client';

import { useEffect, useState } from "react";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import BtnVoltar from '@/components/BtnVoltar';
import CardProdFavoritos from "@/components/CardProdFavoritos";
import Cookies from "js-cookie";

const Favoritos = () => {
    const [produtosFavoritos, setProdutosFavoritos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchFavoritos = async () => {
            try {
                const accessToken = Cookies.get('accessToken');
                if (!accessToken) return;

                // Decodifica o CPF do usuário do accessToken (JWT)
                const payload = JSON.parse(atob(accessToken.split('.')[1]));
                const userCpf = payload.cpf;

                // Busca todos os favoritos
                const favResponse = await fetch("https://localhost:8000/favoritos");
                const favData = await favResponse.json();

                // Filtra apenas os favoritos do usuário logado
                const favoritosUsuario = favData.favoritos.filter(fav => fav.usuarioCpf === userCpf);
                const idsFavoritos = favoritosUsuario.map(fav => fav.idProduto);

                // Busca todos os produtos
                const prodResponse = await fetch("https://localhost:8000/produtos/");
                const prodData = await prodResponse.json();

                // Filtra apenas os produtos favoritados
                const produtosFiltrados = prodData.produtos.filter(prod => idsFavoritos.includes(prod.idProduto));

                setProdutosFavoritos(produtosFiltrados);
            } catch (error) {
                console.error("Erro ao buscar favoritos:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFavoritos();
    }, []);

    return (
        <section className="flex gap-50 bg-[#000002] text-white p-40">
            <BtnVoltar />

            <div className="mt-10">
                <nav className="w-1/4 p-4 bg-[#000002]">
                    <ul>
                        <li className="w-60 mb-10 flex gap-4 text-center"><CiUser className="size-7 text-[#E1D5C2]" />
                            <a href="/perfil" className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">Minha conta</a></li>

                        <li className="w-60 mb-10 flex gap-4 text-center"><PiShoppingBagOpenThin className="size-7 text-[#E1D5C2]" />
                            <a href="/meusPedidos" className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">Meus pedidos</a></li>

                        <li className="w-60 mb-10 flex gap-4 text-center"><IoIosHeartEmpty className="size-7 text-[#E1D5C2]" />
                            <a href="/favoritos" className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">Meus favoritos</a></li>
                    </ul>
                </nav>
            </div>

            <div className="mt-10 flex-1">
                {isLoading ? (
                    <div className="text-center text-[#E1D5C2]">Carregando...</div>
                ) : (
                    <div className="grid grid-cols-4 gap-6 items-center">
                        {produtosFavoritos.length > 0 ? (
                            produtosFavoritos.map(produto => (
                                <CardProdFavoritos key={produto.idProduto} produto={produto} />
                            ))
                        ) : (
                            <div className="col-span-4 text-center text-[#E1D5C2]">Nenhum favorito encontrado.</div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Favoritos;