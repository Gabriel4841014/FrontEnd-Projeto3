"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Importa o hook useRouter
import Image from "next/image";
import BtnVoltar from "@/components/BtnVoltar";
import LogoVivant from "../../../public/Vivanti.png";
import Google from "../../../public/google.png";
import Cookies from 'js-cookie';

export default function EntrarLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter(); // Inicializa o hook useRouter

    useEffect(() => {
        if (isLoggedIn) {
            console.log("Usuário logado com sucesso!");
            router.push("/vitrine"); // Redireciona para a página da vitrine
        }
    }, [isLoggedIn, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://localhost:8000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Store tokens and user data in cookies
                Cookies.set('accessToken', data.accessToken);
                Cookies.set('refreshToken', data.refreshToken);
                Cookies.set('userData', JSON.stringify(data.user));
                
                console.log("Login successful:", data);
                router.push('/perfil');
            } else {
                setErrorMessage(data.message || "Erro ao realizar login.");
            }
        } catch (error) {
            setErrorMessage("Erro ao conectar ao servidor.");
        }
    };

    return (
        <section className="flex h-screen mb-60">
            <div className="w-[43%] bg-[#20232A] text-white flex flex-col justify-center items-center p-10">
                <div className="w-full -mt-[130px]">
                    <BtnVoltar />
                </div>

                <div className="text-4xl font-bold mb-4">
                    <Image src={LogoVivant} alt="Vivant Logo" width={230} height={130} className="mb-20" />
                </div>
                <p className="justify-start text-[#E1D5C2] text-4xl font-['Gilda_Display'] mb-10">Sua jornada começa aqui!</p>
                <p className="w-[456px] text-center justify-start text-[#FFFFFF] text-lg font-['Gilda_Display'] mb-10">
                    Os melhores vinhos nacionais te esperam. Crie sua conta e tenha acesso a uma seleção única de rótulos que traduzem a riqueza e a essência das nossas vinícolas.
                </p>

                <a
                    className="w-auto h-auto rounded-[10px] pt-2 pb-2 pl-2 pr-2 bg-[#E1D5C2] text-[#000000] cursor-pointer"
                    href="signup"
                >
                    Não tem conta? Cadastre-se já!
                </a>
            </div>

            <div className="w-[57%] bg-[#000002] text-white flex flex-col justify-center p-85">
                <p className="justify-start text-[#E1D5C2] text-xl font-['Gilda_Display'] mb-4">Acesse sua conta</p>
                <p className="justify-start text-[#EAE5E1] text-4xl font-['Gilda_Display'] mb-8">Bem vindo de volta!</p>

                <form onSubmit={handleSubmit}>
                    <div>
                        <p className="w-16 justify-start text-[#E1D5C2] text-base font-['Gilda_Display']">E-mail</p>
                        <input
                            type="email"
                            placeholder="exemplo@gmail.com"
                            className="mb-4 p-2 bg-[#EAE5E1] text-[#3F0D09CC] w-full rounded-[5px]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <p className="w-16 h-3.5 justify-start text-[#E1D5C2] text-base font-['Gilda_Display'] mt-3">Senha</p>
                        <input
                            type="password"
                            placeholder="Senha"
                            className="mb-4 p-2 bg-[#EAE5E1] text-[#3F0D09CC] w-full rounded-[5px] mt-3"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

                    <div className="flex justify-center items-center">
                        <button
                            type="submit"
                            className="cursor-pointer bg-[#20232A] text-[#FFFFFF] py-2 px-4 rounded-[5px] w-[70%] mb-2"
                        >
                            Entrar
                        </button>
                    </div>
                </form>

                <div className="flex items-center mb-4">
                    <hr className="flex-grow border-gray-600" />
                    <p className="mx-2">OU</p>
                    <hr className="flex-grow border-gray-600" />
                </div>

                <div className="flex justify-center items-center">
                    <button className="bg-[#EAE5E1] cursor-pointer text-[#3F0D09CC] gap-3 py-2 px-4 rounded flex items-center justify-center">
                        <Image src={Google} alt="Google Icon" width={24} height={24} className="mr-2" />
                        Continuar com o Google
                    </button>
                </div>
            </div>
        </section>
    );
}