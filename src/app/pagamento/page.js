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
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [addressData, setAddressData] = useState({
        apelido: '',
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        cidade: '',
        estado: '',
        bairro: ''
    });
    const [enderecosUsuario, setEnderecosUsuario] = useState([]);

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

    useEffect(() => {
        // Carregar endereços do usuário
        const fetchEnderecos = async () => {
            const accessToken = Cookies.get('accessToken');
            let usuarioCpf = null;
            if (accessToken) {
                try {
                    const payload = JSON.parse(atob(accessToken.split('.')[1]));
                    usuarioCpf = payload.cpf;
                } catch {}
            }
            if (!usuarioCpf) return;

            try {
                const response = await fetch("https://localhost:8000/enderecos/");
                const data = await response.json();
                // Filtra apenas endereços do usuário logado
                const enderecosFiltrados = data.enderecos.filter(e => e.usuarioCpf === usuarioCpf);
                setEnderecosUsuario(enderecosFiltrados);
                // Se já existe endereço, seleciona o primeiro por padrão
                if (enderecosFiltrados.length > 0) setAddress(enderecosFiltrados[0].idEndereco);
            } catch (error) {
                setEnderecosUsuario([]);
            }
        };

        fetchEnderecos();
    }, []);

    const handleCardInputChange = (e) => {
        const { name, value } = e.target;
        setCardData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddressInputChange = (e) => {
        const { name, value } = e.target;
        setAddressData(prev => ({
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
            // Simula processamento do pagamento
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Recupera o CPF do usuário do token
            const accessToken = Cookies.get('accessToken');
            let usuarioCpf = null;
            if (accessToken) {
                try {
                    const payload = JSON.parse(atob(accessToken.split('.')[1]));
                    usuarioCpf = payload.cpf;
                } catch {}
            }

            // Recupera o idPedido do cookie
            const idPedido = Cookies.get('idPedido');

            // Monta o corpo do pagamento conforme solicitado
            const pagamento = {
                idPedido: Number(idPedido),
                metodo: paymentMethod === 'card' ? 'Cartão' : 'PIX',
                valorPago: total,
                status: "Pago", // se o backend aceitar, senão remova
                dataPagamento: new Date().toISOString() // se o backend aceitar, senão remova
            };

            // Faz o POST para /pagamentos
            const pagamentoResponse = await fetch("https://localhost:8000/pagamentos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pagamento)
            });

            if (!pagamentoResponse.ok) {
                throw new Error('Erro ao registrar pagamento');
            }

            // Limpa o carrinho após o pagamento
            Cookies.remove('cart');
            Cookies.remove('cartTotal');

            toast.success('Pagamento realizado com sucesso!');
            router.push('/confirmacao');
        } catch (error) {
            toast.error('Erro ao processar pagamento');
        } finally {
            setLoading(false);
        }
    };

    const handleSaveAddress = async () => {
        const accessToken = Cookies.get('accessToken');
        let usuarioCpf = null;
        if (accessToken) {
            try {
                const payload = JSON.parse(atob(accessToken.split('.')[1]));
                usuarioCpf = payload.cpf;
            } catch {}
        }
        if (!usuarioCpf) {
            toast.error('Usuário não autenticado');
            return;
        }

        // Validação do CEP: apenas números e exatamente 8 dígitos
        const cepNumeros = addressData.cep.replace(/\D/g, '');
        if (cepNumeros.length !== 8) {
            toast.error('CEP deve ter exatamente 8 dígitos numéricos');
            return;
        }

        // Validação dos outros campos obrigatórios
        if (!addressData.rua || !addressData.numero || !addressData.cidade || !addressData.estado || !addressData.bairro) {
            toast.error('Preencha todos os campos obrigatórios do endereço');
            return;
        }

        setLoading(true);
        try {
            const response = await fetch("https://localhost:8000/enderecos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    usuarioCpf,
                    ...addressData,
                    cep: cepNumeros // envia o CEP sem máscara
                })
            });

            if (!response.ok) {
                throw new Error('Erro ao salvar endereço');
            }

            const data = await response.json();
            setAddress(data.idEndereco);
            setShowAddressForm(false);
            toast.success('Endereço salvo com sucesso! Agora selecione o método de pagamento.');
        } catch (error) {
            toast.error('Erro ao salvar endereço');
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

                {!showAddressForm ? (
                    <div className="flex flex-col gap-6 mb-8">
                        {enderecosUsuario.length > 0 ? (
                            enderecosUsuario.map((end) => (
                                <label key={end.idEndereco} className="flex items-start space-x-3 max-w-xl">
                                    <input
                                        type="radio"
                                        name="address"
                                        value={end.idEndereco}
                                        checked={address === end.idEndereco}
                                        onChange={() => setAddress(end.idEndereco)}
                                        className="mt-1 w-4 h-4 text-[#d9cfc4] bg-black border-[#d9cfc4] focus:ring-[#d9cfc4]"
                                    />
                                    <span className="text-sm leading-tight max-w-xl">
                                        {end.apelido} - {end.rua}, {end.numero} - {end.bairro}, {end.cidade}/{end.estado} - CEP: {end.cep}
                                    </span>
                                </label>
                            ))
                        ) : (
                            <span className="text-sm leading-tight max-w-xl">
                                Nenhum endereço cadastrado.
                            </span>
                        )}
                        <button
                            onClick={() => setShowAddressForm(true)}
                            className="bg-[#E1D5C2] text-[#22252a] text-sm font-semibold py-2 px-4 rounded-md hover:bg-[#d9cdbf] w-fit"
                        >
                            {enderecosUsuario.length > 0 ? "Adicionar novo endereço" : "Cadastrar endereço"}
                        </button>
                    </div>
                ) : (
                    <div className="bg-[#22272f] rounded-lg p-6 mb-8">
                        <h3 className="text-xl mb-4">Novo Endereço</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input name="apelido" placeholder="Apelido" value={addressData.apelido} onChange={handleAddressInputChange} className="p-2 rounded bg-[#EAE5E1] text-black" />
                            <input name="cep" placeholder="CEP" value={addressData.cep} onChange={handleAddressInputChange} className="p-2 rounded bg-[#EAE5E1] text-black" />
                            <input name="rua" placeholder="Rua" value={addressData.rua} onChange={handleAddressInputChange} className="p-2 rounded bg-[#EAE5E1] text-black" />
                            <input name="numero" placeholder="Número" value={addressData.numero} onChange={handleAddressInputChange} className="p-2 rounded bg-[#EAE5E1] text-black" />
                            <input name="complemento" placeholder="Complemento" value={addressData.complemento} onChange={handleAddressInputChange} className="p-2 rounded bg-[#EAE5E1] text-black" />
                            <input name="bairro" placeholder="Bairro" value={addressData.bairro} onChange={handleAddressInputChange} className="p-2 rounded bg-[#EAE5E1] text-black" />
                            <input name="cidade" placeholder="Cidade" value={addressData.cidade} onChange={handleAddressInputChange} className="p-2 rounded bg-[#EAE5E1] text-black" />
                            <input name="estado" placeholder="Estado" value={addressData.estado} onChange={handleAddressInputChange} className="p-2 rounded bg-[#EAE5E1] text-black" />
                        </div>
                        <div className="flex gap-4 mt-4">
                            <button
                                onClick={handleSaveAddress}
                                className="bg-[#E1D5C2] text-[#22252a] text-sm font-semibold py-2 px-4 rounded-md hover:bg-[#d9cdbf]"
                                disabled={loading}
                            >
                                {loading ? "Salvando..." : "Salvar endereço"}
                            </button>
                            <button
                                onClick={() => setShowAddressForm(false)}
                                className="bg-[#22252a] text-[#E1D5C2] text-sm font-semibold py-2 px-4 rounded-md hover:bg-[#3F0D09]"
                                disabled={loading}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                )}

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