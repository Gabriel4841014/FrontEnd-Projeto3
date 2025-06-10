"use client"
import Itens from "@/components/Itens"
import { useState, useEffect } from "react"
import Cookies from 'js-cookie';
import BtnVoltar from "@/components/BtnVoltar";

export default function Carrinho() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(Cookies.get('cart') || '[]');
        setCartItems(savedCart);
    }, []);

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return(
        <main className="max-w-6xl ml-100 w-full items-center flex md:flex-row md:gap-20">
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

            <aside className="bg-[#22272f] rounded-lg p-8 max-w-md w-full h-170 mt-50 flex flex-col gap-6">
                <h2 className="text-3xl mt-5 mb-5">
                    Detalhes da compra
                </h2>
                <ul className="flex flex-col gap-5 text-xs md:text-lg">
                    {cartItems.map((item) => (
                        <li key={item.id} className="flex justify-between">
                            <span>{item.name}</span>
                            <span className="text-[#E1D5C2]">
                                R$ {(item.price * item.quantity).toFixed(2)}
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between text-lg mt-4">
                    <span>Total</span>
                    <span>R$ {total.toFixed(2)}</span>
                </div>
            </aside>
        </main>
    );
}