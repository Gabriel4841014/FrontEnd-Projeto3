'use client';

import { PiShoppingBagOpenThin } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import BtnVoltar from '@/components/BtnVoltar';
import Image from "next/image";
import vinho1img from '../../../public/vinho1.png';


const meusPedidos = () => {

    const defaultImage = '/default-wine.png';

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
                            <a href="#" className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">Meus favoritos</a></li>
                    </ul>
                </nav>
            </div>

            <div className="mt-10">
                <div className="w-full h-full bg-[#EAE5E1] rounded-[10px] border-l-[6px] border-[#3F0D09] grid grid-cols-2 gap-20">

                    <div className="grid grid-cols-2 gap-4 p-3">
                        <Image
                            src={vinho1img}
                            alt="Imagem padrão do vinho"
                            className="w-50 h-70 rounded-[10px] border border-[#3F0D09] object-cover m-3"
                        />

                        <div className="flex flex-col justify-between m-3">
                            <h3 className="w-60 justify-start text-[#3F0D09] text-2xl font-['Gilda_Display']">Primeira Estrada Gran Reserva Syrah</h3>
                            <h3 className="justify-start text-[#3F0D09] text-3xl font-['Gilda_Display']">R$ 318,00</h3>
                            <p className="justify-start text-[#260401] text-xl font-['Gilda_Display']">Quantiade:</p>
                        </div>
                    </div>

                    {/* <div className="w-0.5 h-75 bg-[#260401] mt-7" /> */}

                    <div className="flex flex-col justify-between mt-6">
                        <h3 className="justify-start text-[#3F0D09] text-2xl font-['Gilda_Display']">#102345 - 20/03/2025</h3>
                        <h3 className="justify-start text-[#3F0D09] text-3xl font-['Gilda_Display']">Em andamento</h3>
                        <p className="w-80 h-3.5 justify-center text-[#260401] text-2xl font-['Gilda_Display']">Endereço de entrega:</p>
                        <p className="justify-start text-[#260401] text-[17px] font-['Gilda_Display'] mr-6 -mt-2">Rua das Videiras, 245 - Bairro Monte Belo, São Paulo - SP, 04567-890</p>
                        <button className="w-37 h-10 p-2 bg-[#20232A] rounded-[10px] mb-6">
                            <a href="#" className="w-24 h-3 justify-center text-[#EAE5E1] text-[13px] font-['Gilda_Display']">Acompanhar entrega</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default meusPedidos;