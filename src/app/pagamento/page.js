"use client";
import { FaArrowLeft } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';
import BtnVoltar from "@/components/BtnVoltar";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { toast, Toaster } from 'react-hot-toast';

export default function Pagamento() {
    const router = useRouter();
    const [paymentMethod, setPaymentMethod] = useState('pix');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [cardData, setCardData] = useState({
        number: '',
        name: '',
        expiry: '',
        cvv: ''
    });

    useEffect(() => {
        try {
            const savedCart = JSON.parse(Cookies.get('cart') || '[]');
            const savedTotal = parseFloat(Cookies.get('cartTotal') || '0');
            
            setCartItems(savedCart);
            setTotal(savedTotal);
        } catch (error) {
            console.error('Error loading cart:', error);
            setCartItems([]);
            setTotal(0);
        }
    }, []);

    const handleCardInputChange = (e) => {
        const { name, value } = e.target;
        setCardData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePayment = async () => {
        if (!address) {
            toast.error('Selecione um endereço de entrega');
            return;
        }

        if (paymentMethod === 'card') {
            if (!cardData.number || !cardData.name || !cardData.expiry || !cardData.cvv) {
                toast.error('Preencha todos os dados do cartão');
                return;
            }
        }

        setLoading(true);
        try {
            // Simulate payment processing
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Clear cart after successful payment
            Cookies.remove('cart');
            
            toast.success('Pagamento realizado com sucesso!');
            router.push('/confirmacao');
        } catch (error) {
            toast.error('Erro ao processar pagamento');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex mx-auto w-full max-w-7xl">
            <Toaster position="top-center" />
            <header className="mt-5 mr-10">
                <BtnVoltar />
            </header>

            <section className="flex-1 mx-auto w-20 px-8 pt-8 mt-30">
                <h1 className="text-3xl  mb-10">Finalize sua compra!</h1>

                <div className="flex items-center space-x-6 mb-12">
                    <button 
                        onClick={() => setPaymentMethod('pix')}
                        className={`${
                            paymentMethod === 'pix' 
                                ? 'bg-[#d9cfc4] text-[#22252a]' 
                                : 'bg-[#22252a] text-[#d9cfc4]'
                        } text-lg font-normal py-2.5 px-8 rounded-md select-none`}
                    >
                        PIX
                    </button>
                    <div className="h-6 border-l border-[#4a4a4a]"></div>
                    <button 
                        onClick={() => setPaymentMethod('card')}
                        className={`${
                            paymentMethod === 'card' 
                                ? 'bg-[#d9cfc4] text-[#22252a]' 
                                : 'bg-[#22252a] text-[#d9cfc4]'
                        } text-lg font-normal py-2.5 px-8 rounded-md select-none`}
                    >
                        Cartão
                    </button>
                </div>

                <h2 className="text-xl font-normal mb-6">Endereço de entrega</h2>

                <div className="flex flex-col gap-6 mb-8">
                    <label className="flex items-start space-x-3 max-w-xl">
                        <input 
                            type="radio" 
                            name="address"
                            value="address1"
                            checked={address === 'address1'}
                            onChange={(e) => setAddress(e.target.value)}
                            className="mt-1 w-4 h-4 text-[#d9cfc4] bg-black border-[#d9cfc4] focus:ring-[#d9cfc4]"
                        />
                        <span className="text-sm leading-tight max-w-xl">
                            Rua das Flores, 123 - Bairro Jardim das Acácias<br />
                            Belo Horizonte, Minas Gerais, 12345-678
                        </span>
                    </label>
                </div>

                <div className="bg-[#22272f] rounded-lg p-6 mb-8">
                    <h3 className="text-xl mb-4">Resumo do pedido</h3>
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between mb-2">
                            <span>{item.name} (x{item.quantity})</span>
                            <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                    <div className="border-t border-[#4a4a4a] mt-4 pt-4">
                        <div className="flex justify-between font-semibold">
                            <span>Total</span>
                            <span>R$ {total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {paymentMethod === 'card' && (
                    <div className="bg-[#22272f] rounded-lg p-6 mb-8">
                        <h3 className="text-xl mb-4">Dados do Cartão</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm mb-1">Número do Cartão</label>
                                <input
                                    type="text"
                                    name="number"
                                    value={cardData.number}
                                    onChange={handleCardInputChange}
                                    maxLength="16"
                                    className="w-full p-2 rounded bg-[#EAE5E1] text-black"
                                    placeholder="0000 0000 0000 0000"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Nome no Cartão</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={cardData.name}
                                    onChange={handleCardInputChange}
                                    className="w-full p-2 rounded bg-[#EAE5E1] text-black"
                                    placeholder="Como está no cartão"
                                />
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm mb-1">Validade</label>
                                    <input
                                        type="text"
                                        name="expiry"
                                        value={cardData.expiry}
                                        onChange={handleCardInputChange}
                                        maxLength="5"
                                        className="w-full p-2 rounded bg-[#EAE5E1] text-black"
                                        placeholder="MM/AA"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm mb-1">CVV</label>
                                    <input
                                        type="text"
                                        name="cvv"
                                        value={cardData.cvv}
                                        onChange={handleCardInputChange}
                                        maxLength="3"
                                        className="w-full p-2 rounded bg-[#EAE5E1] text-black"
                                        placeholder="000"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <button 
                    onClick={handlePayment}
                    disabled={loading || !address}
                    className="w-full bg-[#E1D5C2] text-[#22252a] text-lg font-semibold py-3 rounded-md hover:bg-[#d9cdbf] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Processando...' : 'Finalizar Compra'}
                </button>
            </section>
        </main>
    );
}