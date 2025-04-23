import React from "react";

export default function MaisVendidos() {
    return (
        <div className="w-full h-auto px-4 sm:px-8 lg:px-16 py-10 bg-[#000002] flex flex-col items-center">
            <p className="text-[#E1D5C2] text-2xl sm:text-3xl lg:text-4xl font-['Gilda_Display'] mt-2 text-center">
                Nossos produtos mais vendidos
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {/* Produto 1 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho1.png" alt="Vinho 1" />
                    <p className="text-[#3F0D09] text-sm font-['Gilda_Display'] text-center mt-2">Luiz Argenta LA Jovem Shiraz</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 144,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

                {/* Produto 2 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho2.png" alt="Vinho 2" />
                    <p className="text-[#3F0D09] text-sm font-['Gilda_Display'] text-center mt-2">Luiz Argenta LA Clássico Pinot Noir I.P.</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 98,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

                {/* Produto 3 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho3.png" alt="Vinho 3" />
                    <p className="text-[#3F0D09] text-sm font-['Gilda_Display'] text-center mt-2">Don Laurindo Don Tannat</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>  
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 265,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

                {/* Produto 4 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho4.png" alt="Vinho 4" />
                    <p className="text-[#3F0D09] text-sm font-['Gilda_Display'] text-center mt-2">Primeira Estrada Gran Reserva Syrah</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 318,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}