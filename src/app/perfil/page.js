import React from 'react';
import { PiShoppingCartThin } from "react-icons/pi";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiEdit } from "react-icons/ci";



const Profile = () => {
    return (
        <section className="flex gap-50 bg-[#000002] text-white p-30">

            <div className="mt-10">
                <div className="">
                    <h1 class="text-[#E1D5C2] text-3xl font-['Gilda_Display']">Olá, [Nome do Usuário]!</h1>
                    <p class="w-85 text-[#EAE5E1] font-['Gilda_Display'] mt-3 mb-15">Bem-vindo ao seu espaço exclusivo. Aqui você pode gerenciar seus dados e acompanhar seus pedidos.</p>
                </div>

                <nav className="w-1/4 p-4 bg-[#000002]">
                    <ul>
                        <li className="w-60 mb-10 flex gap-4 text-center"><PiShoppingCartThin className="size-7 text-[#E1D5C2]" /> <a href="#" className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">Minha conta</a></li>
                        <li className="w-60 mb-10 flex gap-4 text-center"><PiShoppingBagOpenThin className="size-7 text-[#E1D5C2]" /> <a href="#" className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">Meus pedidos</a></li>
                        <li className="w-60 mb-10 flex gap-4 text-center"><IoIosHeartEmpty className="size-7 text-[#E1D5C2]" /> <a href="#" className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">Meus favoritos</a></li>
                    </ul>
                </nav>
            </div>

            <div className="mt-10">
                <p class="justify-start text-[#FFFFFF] text-3xl font-['Gilda_Display'] mb-7">Meu perfil</p>
                <div className="bg-[#000002] rounded-lg p-20 border border-[#EAE5E1]">

                    <div className="flex items-center gap-132 mb-10">
                        <div className="flex items-center gap-6 ml-4">
                            <div class="w-20 h-20 bg-zinc-300 rounded-full"></div>
                            <p class="justify-start text-white text-xl font-['Gilda_Display']">[Nome do usuário]</p>
                        </div>

                        <button class="w-30 h-8 p-2 bg-[#20232A] rounded-[5px]">
                            <div className="flex items-center gap-2 justify-center">
                                <CiEdit className="size-4 text-[#FFFFFF]" />
                                <a href="#" class="text-[#EAE5E1] text-xs font-['Gilda_Display']">Editar perfil</a>
                            </div>
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 ml-30 mr-30">
                        <InputField label="Nome Completo" value="[Nome completo do usuário]" />
                        <InputField label="CPF" value="00.000.000/0000-00" />
                        <InputField label="E-mail" value="email@gmail.com" />
                        <InputField label="Gênero" value="Feminino/masculino/outros" />
                        <InputField label="Data de Nascimento" value="15/08/1987" />
                        <InputField label="Número de Telefone" value="(11) 94567-1252" />
                    </div>

                    <button class="w-40 h-12 bg-[#20232A] rounded-[5px] items-center justify-center mt-15 ml-107 mr-107">
                        <p href="#" class="text-[#EAE5E1] text-[17px] font-['Gilda_Display']">Salvar mudanças</p>
                    </button>

                </div>
            </div>
        </section>
    );
};

const InputField = ({ label, value }) => {
    return (
        <div>
            <label className="block mb-1 justify-start text-[#E1D5C2] text-base font-['Gilda_Display']">{label}</label>
            <input
                type="text"
                value={value}
                readOnly
                className="w-90 h-10 p-2 bg-[#EAE5E1] rounded-[5px] justify-start text-[#3F0D0980] font-['Gilda_Display']"
            />
        </div>
    );
};

export default Profile;
