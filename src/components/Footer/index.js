'use client'

import React from 'react';
import { VscArrowRight } from "react-icons/vsc";
import { IoLogoInstagram, IoMdAdd } from "react-icons/io";
import { SlSocialFacebook } from "react-icons/sl";
import { PiTwitterLogoLight } from "react-icons/pi";

export default function Footer() {
    return (
        
        <footer className="bg-black text-[#EAE5E1]">

            <div className="w-full h-auto px-4 py-10 flex flex-col items-center gap-5">
                <p className="text-[#E1D5C2] text-2xl sm:text-3xl font-['Gilda_Display'] text-center">
                    Fique por dentro de todas as promoções
                </p>
                <p className="text-sm sm:text-base font-['Gilda_Display'] text-center">
                    Quer receber nossas ofertas? Cadastre-se e comece a recebê-las!
                </p>

                <div className="mt-5 flex flex-col sm:flex-row items-center w-200 bg-[#EAE5E1] rounded-lg">
                    <input
                        className="flex-grow h-12 bg-transparent text-black font-['Montserrat'] rounded-t-[10px] sm:rounded-l-[10px]  pl-4 outline-none"
                        type="email"
                        placeholder="Digite seu E-mail"
                    />
                    <button className="w-full sm:w-12 h-12 bg-[#EAE5E1] flex items-center justify-center rounded-lg">
                        <VscArrowRight className="text-black text-[20px]" />
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap justify-between px-4 sm:px-10 py-10 gap-10 items-center">

                <div className="m-auto">
                    <p className="text-[#E1D5C2] text-lg sm:text-xl font-['Gilda_Display']">Entre em contato conosco</p>

                    <div className="mt-5">
                        <p className="sm:text-base font-['Gilda_Display'] mt-5 text-4xlxl">Rua Mário Salton, 300 - Bento Gonçalves, RS</p>
                        <p className="sm:text-base font-['Gilda_Display'] mt-5 text-4xlxl"><a href="tel:(12) 9 8202-1943">(12) 9 8202-1943</a></p>
                        <p className="sm:text-base font-['Gilda_Display'] mt-5 text-4xlxl">vivant.contato@gmail.com</p>
                    </div>
                </div>

                <div className="m-auto flex flex-col items-center">
                    <p className="text-[#E1D5C2] text-lg sm:text-xl font-['Gilda_Display'] text-center">Formas de pagamento</p>
                    <img className="w-40 sm:w-60 mt-5 bg-[#D9D9D9] rounded-lg" src="pag-icons.png" alt="Formas de pagamento" />
                </div>

                <div className="m-auto">
                    <p className="text-[#E1D5C2] text-lg sm:text-xl font-['Gilda_Display']">Siga-nos e brinde com a gente</p>

                    <div className="mt-5 space-y-3">
                        <div className="flex items-center gap-2">
                            <IoLogoInstagram className="text-[22px]" />
                            <p className="text-sm sm:text-base font-['Gilda_Display']">@vivant</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <SlSocialFacebook className="text-[22px]" />
                            <p className="text-sm sm:text-base font-['Gilda_Display']">@vivant</p>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <PiTwitterLogoLight className="text-[22px]" />
                            <p className="text-sm sm:text-base font-['Gilda_Display']">@vivant</p>
                        </div>
                    </div>
        
                </div>
            </div>

            <div className="text-center py-5">
                <p className="text-sm sm:text-base font-['Gilda_Display'] text-[#E1D5C2]">
                    &copy;2025 Vivant. Todos os direitos reservados.
                </p>
            </div>

        </footer>
    );
}