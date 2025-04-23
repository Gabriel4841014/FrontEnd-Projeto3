import React from "react";

export default function MaisVendidos() {
    return (
        <div className="w-[1280px] h-auto ml-auto mr-auto mt-50 mb-20 p-7 items-center bg-[#000002] flex flex-col">
            <p className="text-[#E1D5C2] text-4xl font-['Gilda_Display'] mt-2">Nossos produtos mais vendidos</p>

            <div className="flex justify-between gap-10 mt-20">

                <div className="w-60 h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 ml-auto mr-auto" src="vinho1.png" />
                    <p className="w-36 h-8 text-[#3F0D09] text-sm font-['Gilda_Display']">Luiz Argenta LA Jovem Shiraz</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between">
                        <p className="w-24 h-5 mt-1 text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 144,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] items-center justify-center"> + </button>
                    </div>
                </div>

                <div className="w-60 h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 ml-auto mr-auto" src="vinho2.png" />
                    <p className="w-36 h-8 text-[#3F0D09] text-sm font-['Gilda_Display']">Luiz Argenta LA Clássico Pinot Noir I.P.</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between">
                        <p className="w-24 h-5 mt-1 text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 98,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] items-center justify-center"> + </button>
                    </div>
                </div>

                <div className="w-60 h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 ml-auto mr-auto" src="vinho3.png" />
                    <p className="w-36 h-8 text-[#3F0D09] text-sm font-['Gilda_Display']">Don Laurindo Don Tannat</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between">
                        <p className="w-24 h-5 mt-1 text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 265,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] items-center justify-center"> + </button>
                    </div>
                </div>

                <div className="w-60 h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 ml-auto mr-auto" src="vinho4.png" />
                    <p className="w-36 h-8 text-[#3F0D09] text-sm font-['Gilda_Display']">Primeira Estrada Gran Reserva Syrah</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between">
                        <p className="w-24 h-5 mt-1 text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 318,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] items-center justify-center"> + </button>
                    </div>
                </div>

            </div>
        </div>
    )
}