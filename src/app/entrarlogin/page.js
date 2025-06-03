"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Image from "next/image";
import BtnVoltar from "@/components/BtnVoltar";
import LogoVivant from "../../../public/Vivanti.png";
import Google from "../../../public/google.png";

export default function EntrarLogin() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:8000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
           

           
            if (! (response.status === 201)) {
                throw new Error(data.message || 'Erro ao fazer login');
            }   


            // Store tokens and user data in cookies
            Cookies.set('accessToken', data.accessToken);
            Cookies.set('refreshToken', data.refreshToken);
            Cookies.set('userData', JSON.stringify(data.user));

            router.push('/profile');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="flex h-screen mb-60">
            <div className="w-[43%] bg-[#20232A] text-white flex flex-col justify-center items-center p-10">
                <div className=" w-full -mt-[130px]">
                    <BtnVoltar />
                </div>

                <div className="text-4xl font-bold mb-4">
                    <Image src={LogoVivant} alt="Vivant Logo" width={230} height={130} className="mb-20" />
                </div>
                <p className="justify-start text-[#E1D5C2] text-4xl font-['Gilda_Display'] mb-10">Sua jornada começa aqui!</p>
                <p className="w-[456px] text-center justify-start text-[#FFFFFF] text-lg font-['Gilda_Display'] mb-10">Os melhores vinhos nacionais te esperam. Crie sua conta e tenha acesso a uma seleção única de rótulos que traduzem a riqueza e a essência das nossas vinícolas.</p>

                <button className="w-64 h-10 rounded-[10px] bg-[#E1D5C2] text-[#000000]" href="#">Não tem conta? Cadastre-se já!</button>
            </div>

            {/* Entrar - Login */}
            <div className="w-[57%] bg-[#000002] text-white flex flex-col justify-center p-85">
                <p className="justify-start text-[#E1D5C2] text-xl font-['Gilda_Display'] mb-4">Acesse sua conta</p>
                <p className="justify-start text-[#EAE5E1] text-4xl font-['Gilda_Display'] mb-8">Bem vindo de volta!</p>

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div>
                        <p className="w-16 justify-start text-[#E1D5C2] text-base font-['Gilda_Display']">E-mail</p>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="exemplo@gmail.com"
                            className="mb-4 p-2 bg-[#EAE5E1] text-[#3F0D09CC] w-full rounded-[5px] outline-none"
                            required
                        />
                    </div>

                    <div>
                        <p className="w-16 justify-start text-[#E1D5C2] text-base font-['Gilda_Display']">Senha</p>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Digite sua senha"
                            className="mb-4 p-2 bg-[#EAE5E1] text-[#3F0D09CC] w-full rounded-[5px] outline-none"
                            required
                        />
                    </div>

                    <button 
                        type="submit"
                        disabled={loading}
                        className="w-full p-2 bg-[#E1D5C2] text-black rounded-[5px] disabled:opacity-50"
                    >
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>
            </div>
        </section>
    );
}