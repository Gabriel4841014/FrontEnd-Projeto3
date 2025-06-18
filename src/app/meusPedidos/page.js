'use client';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import BtnVoltar from '@/components/BtnVoltar';
import CardPedido from "@/components/CardPedido";

const MeusPedidos = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const accessToken = Cookies.get('accessToken');
                if (!accessToken) {
                    throw new Error('Usuário não autenticado');
                }

                const response = await fetch('https://localhost:8000/pedidos/', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Falha ao carregar pedidos');
                }

                const data = await response.json();
                setOrders(Array.isArray(data) ? data : []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const formatAddress = (endereco) => {
        return `${endereco.rua}, ${endereco.numero} - ${endereco.bairro}, ${endereco.cidade} - ${endereco.estado}, ${endereco.cep}`;
    };

    return (
        <section className="flex gap-50 bg-[#000002] text-white p-40">
            <BtnVoltar />
            <div className="flex w-full">
                <nav className="w-1/4 p-4 bg-[#000002] min-w-[250px]">
                    <ul>
                        <li className="w-60 mb-10 flex gap-4 text-center">
                            <CiUser className="size-7 text-[#E1D5C2]" />
                            <a href="/perfil" className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">
                                Minha conta
                            </a>
                        </li>
                        <li className="w-60 mb-10 flex gap-4 text-center"><PiShoppingBagOpenThin className="size-7 text-[#E1D5C2]" />
                            <a href="/meusPedidos" className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">Meus pedidos</a></li>

                        <li className="w-60 mb-10 flex gap-4 text-center"><IoIosHeartEmpty className="size-7 text-[#E1D5C2]" />
                            <a href="#" className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">Meus favoritos</a></li>
                    </ul>
                </nav>

                <div className="flex-1 pl-8">
                    {loading ? (
                        <div>Carregando pedidos...</div>
                    ) : error ? (
                        <div>Erro ao carregar pedidos.</div>
                    ) : (
                        <div className="space-y-6">
                            {orders && orders.map((order) => (
                                <CardPedido
                                    key={order.idPedido}
                                    imageSrc="/boxicon.png"
                                    productName="Pedido: "
                                    price={order.valorTotal}
                                   
                                    orderNumber={order.idPedido}
                                    orderDate={new Date(order.dataCompra).toLocaleDateString('pt-BR')}
                                    status={order.status}
                                    address={formatAddress(order.endereco)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MeusPedidos;