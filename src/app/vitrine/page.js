"use client"
import CardProd from "@/components/CardProd";
import React, { useState, useEffect } from "react";
import { VscArrowLeft } from "react-icons/vsc";
import Filtragem from "@/components/Filtragem";
import BtnOrdenar from "@/components/BtnOrdenar";

export default function Vitrine() {
    const [produtos, setProdutos] = useState([]);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filtrosAtivos, setFiltrosAtivos] = useState({
        categoria: [],
        classificacao: [],
        preco: [], // Changed from marca to preco
        regiao: []
    });

    useEffect(() => {
        fetch("https://localhost:8000/produtos/")
            .then((response) => {
                if (!response.ok) throw new Error("Erro ao buscar produtos");
                return response.json();
            })
            .then((data) => {
                if (data.produtos) {
                    setProdutos(data.produtos);
                    setProdutosFiltrados(data.produtos);
                }
            })
            .catch((error) => console.error("Erro:", error))
            .finally(() => setIsLoading(false));
    }, []);

    const handleFiltroChange = (categoria, { id, checked }) => {
        setFiltrosAtivos(prevFiltros => {
            const novosFiltros = { ...prevFiltros };
            if (checked) {
                novosFiltros[categoria] = [...novosFiltros[categoria], id];
            } else {
                novosFiltros[categoria] = novosFiltros[categoria].filter(item => item !== id);
            }
            return novosFiltros;
        });
    };

    const checkPrecoRange = (preco, ranges) => {
        const precoNum = parseFloat(preco);
        return ranges.some(range => {
            const [min, max] = range.split('-').map(Number);
            if (!max) {
                // For "501" case (above 500)
                return precoNum >= min;
            }
            return precoNum >= min && precoNum <= max;
        });
    };

    useEffect(() => {
        const temFiltrosAtivos = Object.values(filtrosAtivos).some(filtro => filtro.length > 0);
        
        if (!temFiltrosAtivos) {
            setProdutosFiltrados(produtos);
            return;
        }

        const produtosFiltrados = produtos.filter(produto => {
            return Object.entries(filtrosAtivos).every(([categoria, valores]) => {
                if (valores.length === 0) return true;
                
                const getValue = (prop) => (produto[prop] || '').toLowerCase();
                
                switch (categoria) {
                    case 'categoria':
                        return valores.includes(getValue('categoria'));
                    case 'classificacao':
                        return valores.includes(getValue('classificacao'));
                    case 'preco':
                        return checkPrecoRange(produto.preco, valores);
                    case 'regiao':
                        return valores.includes(getValue('regiao'));
                    default:
                        return true;
                }
            });
        });

        setProdutosFiltrados(produtosFiltrados);
    }, [filtrosAtivos, produtos]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white"></div>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center p-4">
            <div className="mt-20 flex ml-10 mr-auto">
                <VscArrowLeft className="text-[#E1D5C2] text-2xl font-['Gilda_Display'] mr-2" />
                <p className="text-[#E1D5C2] text-2xl font-['Gilda_Display']">
                    Voltar
                </p>
            </div>

            <div className="max-w-[1380px] h-auto container sm:px-10 flex flex-col">
                <div className="w-full h-auto px-4 sm:px-8 flex flex-row justify-between">
                    <div>
                        <h2 className="text-[#ffffff] text-2xl font-['Gilda_Display'] mt-20 mb-0">
                            Mostrando {produtos.length} de {produtos.length}
                        </h2>
                    </div>

                    <BtnOrdenar></BtnOrdenar>
                </div>

                <div className="h-0.5 w-full bg-white mb-5"></div>
            </div>

            <div className="w-full h-auto px-4 sm:px-8 lg:px-16 bg-[#000002] flex flex-row items-center justify-center gap-5 flex-2/5">
                <Filtragem onFiltroChange={handleFiltroChange} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {produtosFiltrados.map((produto) => (
                        <CardProd key={produto.idProduto} produto={produto} />
                    ))}
                </div>
            </div>
        </div>
    );
}