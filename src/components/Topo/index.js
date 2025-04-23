import React from 'react';
import { PiShoppingCartThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import Link from "next/link";

export default function Topo() {
    return (
        <header className='z-1000 w-full h-20 fixed bg-black shadow-lg uppercase'>

        <div className="flex items-center justify-between">
            <img className="h-12 w-22 ml-10"  src='vivanti.png' /> 

            <nav className="flex items-center justify-between pr-10 p-5 gap-10">
                <Link className='text-[20px]' href='/'>Home</Link>
                <Link className='text-[20px]' href='/Vinhos'>Vinhos</Link>
                <a className='text-[20px]' href='#'>Sobre nós</a>
                <a className='text-[20px]' href='#'>Contato</a>

                <a className='text-[28px]' href='#'> <PiShoppingCartThin /> </a>
                <a className='text-[28px]' href='#'> <CiUser /> </a>
            </nav>
        </div>

        </header>
    )
}