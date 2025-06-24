"use client"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation';
import Itens from "@/components/Itens"
import Cookies from 'js-cookie';
import BtnVoltar from "@/components/BtnVoltar";
import { toast, Toaster } from 'react-hot-toast';

export default function Carrinho() {
    const router = useRouter();
    const [cartItems, setCartItems] = useState([]);
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
    const [isLoadingCoupon, setIsLoadingCoupon] = useState(false);

    useEffect(() => {
        const savedCart = JSON.parse(Cookies.get('cart') || '[]');
        setCartItems(savedCart);
    }, []);

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = subtotal * (discount / 100);
    const finalTotal = subtotal - discountAmount;
    Cookies.set('cartTotal', finalTotal.toFixed(2));

    const handleApplyCoupon = async () => {
        if (!coupon) {
            toast.error('Digite um cupom');
            return;
        }

        setIsLoadingCoupon(true);
        try {
            const response = await fetch('https://localhost:8000/cupom');
            if (!response.ok) throw new Error('Falha ao validar cupom');
            
            const data = await response.json();
            const validCoupon = data.cupons.find(c => c.codigo === coupon);
       

            if (validCoupon) {
                setDiscount(validCoupon.desconto);
                toast.success(`Cupom aplicado! F de desconto`);
            } else {
                setDiscount(0);
                toast.error('Cupom inválido');
            }
        } catch (error) {
            console.error('Erro ao validar cupom:', error);
            toast.error('Erro ao validar cupom');
        } finally {
            setIsLoadingCoupon(false);
        }
    };

    const handleCheckout = async (finalTotal) => {
        if (cartItems.length === 0) {
            toast.error('Adicione itens ao carrinho para continuar');
            return;
        }

        // Recupera o CPF do usuário do token
        const accessToken = Cookies.get('accessToken');
        let usuarioCpf = null;
        if (accessToken) {
            try {
                const payload = JSON.parse(atob(accessToken.split('.')[1]));
                usuarioCpf = payload.cpf;
            } catch {}
        }
        if (!usuarioCpf) {
            toast.error('Você precisa estar logado para finalizar a compra.');
            return;
        }

        // Para teste, use idEndereco e idCupom fixos
        const pedido = {
            usuarioCpf,
            idEndereco: 1, // ajuste conforme sua lógica de endereço
            valorTotal: finalTotal,
            status: "Pendente",
            idCupom: 1 // ajuste conforme sua lógica de cupom
        };

        try {
            const response = await fetch("https://localhost:8000/pedidos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pedido)
            });

            if (!response.ok) {
                throw new Error('Erro ao registrar pedido');
            }

            const pedidoCriado = await response.json();
            // Corrija aqui para acessar o idPedido corretamente:
            const idPedido = pedidoCriado.pedido.idPedido;
            Cookies.set('idPedido', idPedido);

            toast.success('Pedido criado com sucesso!');
            router.push('/pagamento');
        } catch (error) {
            toast.error('Erro ao criar pedido');
        }
    };

    return (
        <main className="max-w-6xl ml-100 w-full items-center flex md:flex-row md:gap-20">
            <Toaster position="top-center" />
            <BtnVoltar />
            <section className="flex flex-col mt-10 gap-6 max-w-3xl w-full">
                <header className="flex justify-between items-center">
                    <h1 className="text-lg md:text-2xl mb-10">
                        Carrinho
                    </h1>
                    <span className="text-xs mb-10 md:text-lg">
                        {cartItems.length} items
                    </span>
                </header>
                <hr className="border-t mb-10 border-[#EAE5E1]"/>
                <ul className="flex flex-col gap-4">
                    {cartItems.map((item) => (
                        <Itens 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            image={item.image}
                        />
                    ))}
                </ul>
            </section>

            <aside className="bg-[#22272f] rounded-lg p-8 max-w-md w-full h-fit mt-10">
                <h2 className="text-3xl mt-5 mb-5">Detalhes da compra</h2>
                
                <div className="mb-6">
                    <label className="block text-lg mb-2">Cupom</label>
                    <div className="flex border border-[#d9cdbf] rounded-md overflow-hidden">
                        <input 
                            className="bg-[#EAE5E1] text-xs md:text-sm text-[#4a4a4a] px-4 py-2 w-full outline-none"
                            type="text"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                            placeholder="Digite seu cupom"
                        />
                        <button 
                            onClick={handleApplyCoupon}
                            disabled={isLoadingCoupon}
                            className="bg-[#EAE5E1] text-xs md:text-sm text-[#4a4a4a] px-4 py-2 border-l border-[#d9cdbf] hover:bg-[#e6d9c2] transition disabled:opacity-50"
                        >
                            {isLoadingCoupon ? 'Aplicando...' : 'Aplicar'}
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex justify-between text-lg">
                        <span>Subtotal</span>
                        <span>R$ {subtotal.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                        <div className="flex justify-between text-lg text-green-500">
                            <span>Desconto ({discount.toFixed(0)}%)</span>
                            <span>- R$ {discountAmount.toFixed(2)}</span>
                        </div>
                    )}
                    <div className="flex justify-between text-lg font-bold border-t border-[#4a4a4a] pt-4">
                        <span>Total</span>
                        <span>R$ {finalTotal.toFixed(2)}</span>
                    </div>
                </div>

                <button 
                    onClick={() => handleCheckout(finalTotal)}
                    disabled={cartItems.length === 0}
                    className={`w-full mt-6 text-lg font-semibold py-3 rounded-md transition-colors
                        ${cartItems.length > 0 
                            ? 'bg-[#E1D5C2] text-[#22252a] hover:bg-[#d9cdbf]' 
                            : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
                >
                    {cartItems.length > 0 ? `Finalizar Compra - R$ ${finalTotal.toFixed(2)}` : 'Carrinho Vazio'}
                </button>
            </aside>
        </main>
    );
}