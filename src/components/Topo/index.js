"use client"

import React from 'react';
import { PiShoppingCartThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function Topo() {
    const router = useRouter();

    const isUserLoggedIn = () => {
        const accessToken = Cookies.get('accessToken');
        const userData = Cookies.get('userData');

        if (!accessToken || !userData) return false;

        try {
            const base64Url = accessToken.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const payload = JSON.parse(window.atob(base64));

            if (payload.exp * 1000 < Date.now()) {
                // Token expirado, limpar cookies
                Cookies.remove('accessToken');
                Cookies.remove('refreshToken');
                Cookies.remove('userData');
                return false;
            }

            return true;
        } catch (error) {
            return false;
        }
    };

    const handleProfileClick = (e) => {
        e.preventDefault();

        if (isUserLoggedIn()) {
            router.push('/perfil');
        } else {
            router.push('/login');
        }
    };

    return (
        <header className='z-100 w-full h-20 fixed bg-black shadow-lg uppercase'>
            <div className="flex items-center justify-between">
                <img className="h-12 w-22 ml-10" src="Vivanti.png" alt="Vivant Logo" />
                <nav className="flex items-center justify-between pr-10 p-5 gap-10">
                    <a className='text-[20px]' href='/'>Home</a>
                    <a className='text-[20px]' href='/vitrine'>Vinhos</a>
                    <a className='text-[20px]' href='/sobre'>Sobre nós</a>
                    <a className='text-[20px]' href='/contato'>Contato</a>
                    <a className="text-[28px]" href="/carrinho">
                        <PiShoppingCartThin />
                    </a>
                    
                    <a
                        className="text-[28px]"
                        href="#"
                        onClick={handleProfileClick}>
                        <CiUser />
                    </a>
                </nav>
            </div>
        </header>
    );
}