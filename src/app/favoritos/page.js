'use client';

import { PiShoppingBagOpenThin } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import BtnVoltar from '@/components/BtnVoltar';
import CardProdFavoritos from "@/components/CardProdFavoritos";

const favoritos = () => {

    return (
        <section className="flex gap-50 bg-[#000002] text-white p-40">
            <BtnVoltar />

            <div className="mt-10">

                <nav className="w-1/4 p-4 bg-[#000002]">
                    <ul>
                        <li className="w-60 mb-10 flex gap-4 text-center"><CiUser className="size-7 text-[#E1D5C2]" />
                            <a href="/perfil" className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">Minha conta</a></li>

                        <li className="w-60 mb-10 flex gap-4 text-center"><PiShoppingBagOpenThin className="size-7 text-[#E1D5C2]" />
                            <a href="/meusPedidos" className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">Meus pedidos</a></li>

                        <li className="w-60 mb-10 flex gap-4 text-center"><IoIosHeartEmpty className="size-7 text-[#E1D5C2]" />
                            <a href="/favoritos" className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">Meus favoritos</a></li>
                    </ul>
                </nav>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-4 gap-6 items-center">
                    <CardProdFavoritos />
                </div>
            </div>

        </section>
    );
};

export default favoritos;