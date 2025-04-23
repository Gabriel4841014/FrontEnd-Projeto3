'use client'

import React from 'react';
import { VscArrowRight } from "react-icons/vsc";
import { IoLogoInstagram, IoMdAdd } from "react-icons/io";
import { SlSocialFacebook } from "react-icons/sl";
import { PiTwitterLogoLight } from "react-icons/pi";
import Image from "next/image";

import Pagamentos from '../../../public/pag-icons.png';

export default function Footer() {
    return (
        <footer>
            <div className="w-[1512px] h-[600px] bg-black ml-auto mr-auto -mb-15 flex flex-col items-center justify-center gap-7">
                <p className="text-[#E1D5C2] text-[34px] font-['Gilda_Display']">Fique por dentro de todas as promoções</p>
                <p className="text-[#EAE5E1] text-[16px] font-['Gilda_Display']">Quer receber nossas ofertas? Cadastre-se e comece a recebê-las!</p>

                <div className="mt-8 flex items-center w-[600px] h-[50px] bg-[#EAE5E1] rounded-[10px]">
                    <input className="flex-grow h-full bg-transparent text-black font-['Montserrat'] rounded-l-[10px] pl-10 outline-none" type="email" placeholder="Digite seu E-mail" />

                    <button className="w-[50px] h-full bg-[#EAE5E1] flex items-center justify-center rounded-r-[10px]">
                        <VscArrowRight className="text-black text-[20px]" />
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between ml-22 mr-22">
                <div>
                    <p className="text-[#E1D5C2] text-[24px] font-[Gilda_Display]">Entre em contato conosco</p>
                    <div className="mt-7">
                        <p className="text-[#EAE5E1] text-[18px] font-['Gilda_Display']">Rua Mário Salton, 300 - Bento Gonçalves, RS</p>
                        <p className="text-[#EAE5E1] mt-5 text-[18px] font-['Gilda_Display']">(12) 9 8202-1943</p>
                        <p className="text-[#EAE5E1] mt-5 text-[18px] font-['Gilda_Display']">vivant.contato@gmail.com</p>
                    </div>
                </div>

                <div className="items-center justify-center flex flex-col gap-5">
                    <p className="text-[#E1D5C2] text-[24px] font-['Gilda_Display']">Formas de pagamento</p>
                    <Image className="w-80 bg-[#D9D9D9] rounded-xl" src={Pagamentos} alt="Pag-icons"/>
                </div>

                <div>
                    <p className="text-[#E1D5C2] text-[24px] font-['Gilda_Display']">Siga-nos e brinde com a gente</p>
                    <div className="mt-7">
                        <div className="flex items-center gap-2">
                            <i className="text-[#EAE5E1] text-[22px] "><IoLogoInstagram /></i>
                            <p className="text-[#EAE5E1] text-[18px] font-['Gilda_Display']">@vivant</p>
                        </div>

                        <div className="flex items-center gap-2 mt-5">
                            <i className="text-[#EAE5E1] text-[22px]"><SlSocialFacebook /></i>
                            <p className="text-[#EAE5E1] text-[18px] font-['Gilda_Display']">@vivant</p>
                        </div>

                        <div className="flex items-center gap-2 mt-5">
                            <i className="text-[#EAE5E1] text-[22px]"><PiTwitterLogoLight /></i>
                            <p className="text-[#EAE5E1] text-[18px] font-['Gilda_Display']">@vivant</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="items-center justify-center flex flex-col gap-5 mt-40">
                <p className="text-[#E1D5C2] text-[18px] font-['Gilda_Display']">&copy;2025 Vivant. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}