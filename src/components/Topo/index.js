import React from 'react';
import { PiShoppingCartThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import Link from "next/link";

export default function Topo() {
    return (
        <header className='z-100 w-full h-20 fixed bg-black shadow-lg uppercase'>

            <div className="flex items-center justify-between">
                <img className="h-12 w-22 ml-10" src="Vivanti.png" alt="Vivant Logo" />

                {/* <nav className="flex items-center justify-between pr-10 p-5 gap-10">
                    <a className='text-[20px] underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit' href='/'>Home</a>
                    <a className='text-[20px] underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit' href='#'>Vinhos</a>
                    <a className='text-[20px] underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit' href='/sobre'>Sobre nós</a>
                    <a className='text-[20px] underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit' href='/contato'>Contato</a>

                    <a className='text-[28px]' href='#'> <PiShoppingCartThin /> </a>
                    <a className='text-[28px]' href='#'> <CiUser /> </a>
                </nav> */}

                <nav className="flex items-center justify-between pr-10 p-5 gap-10">
                    {[
                        { href: '/', label: 'Home' },
                        { href: '#', label: 'Vinhos' },
                        { href: '/sobre', label: 'Sobre nós' },
                        { href: '/contato', label: 'Contato' }
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="relative text-[20px] group"
                        >
                            {item.label}
                            <div className="absolute -bottom-[2px] left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
                        </a>
                    ))}

                    <a className="text-[28px]" href="#"> <PiShoppingCartThin /> </a>
                    <a className="text-[28px]" href="#"> <CiUser /> </a>
                </nav>

            </div>

        </header>
    )
}