import React from "react";

export default function Vitrine() {

    return (
        <div className="w-full h-auto px-4 sm:px-8 lg:px-16 py-10 bg-[#000002] flex flex-col items-center">
            <p className="text-[#E1D5C2] text-2xl sm:text-3xl lg:text-4xl font-['Gilda_Display'] mt-2 text-center">
                Nossos produtos mais vendidos
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {/* Produto 1 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho1.png" alt="Vinho 1" />
                    <p className="w-50 h-8 justify-start text-[#3F0D09] text-sm font-['Gilda_Display'] mt-2">Luiz Argenta LA Jovem Shiraz</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 144,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

                {/* Produto 2 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho2.png" alt="Vinho 2" />
                    <p className="w-50 h-8 justify-start text-[#3F0D09] text-sm font-['Gilda_Display'] mt-2">Luiz Argenta LA Clássico Pinot Noir I.P.</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 98,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

                {/* Produto 3 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho3.png" alt="Vinho 3" />
                    <p className="w-50 h-8 justify-start text-[#3F0D09] text-sm font-['Gilda_Display'] mt-2">Don Laurindo Don Tannat</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 265,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

                {/* Produto 4 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho4.png" alt="Vinho 4" />
                    <p className="w-50 h-8 justify-start text-[#3F0D09] text-sm font-['Gilda_Display'] mt-2">Primeira Estrada Gran Reserva Syrah</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 318,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

                {/* Produto 5 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho5.png" alt="Vinho 1" />
                    <p className="w-50 h-8 justify-start text-[#3F0D09] text-sm font-['Gilda_Display'] mt-2">Tempos de Góes Philosophia Cabernet Franc</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 179,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

                {/* Produto 6 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho6.png" alt="Vinho 2" />
                    <p className="w-50 h-8 justify-start text-[#3F0D09] text-sm font-['Gilda_Display'] mt-2">Tempos de Góes Míneres Syrah</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 98,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

                {/* Produto 7 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho7.png" alt="Vinho 3" />
                    <p className="w-50 h-8 justify-start text-[#3F0D09] text-sm font-['Gilda_Display'] mt-2">Valparaiso Vitale Sangiovese</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 128,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

                {/* Produto 8 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho8.png" alt="Vinho 4" />
                    <p className="w-50 h-8 justify-start text-[#3F0D09] text-sm font-['Gilda_Display'] mt-2">Garibaldi Precioso Tinto Demi-Sec</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 98,90</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

                {/* Produto 9 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho9.png" alt="Vinho 1" />
                    <p className="w-50 h-8 justify-start text-[#3F0D09] text-sm font-['Gilda_Display'] mt-2">Valmarino V3 Corte 1 Toscano</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 112,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

                {/* Produto 10 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho10.png" alt="Vinho 2" />
                    <p className="w-50 h-8 justify-start text-[#3F0D09] text-sm font-['Gilda_Display'] mt-2">Merlot L.A. Cave</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 211,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

                {/* Produto 11 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho11.png" alt="Vinho 3" />
                    <p className="w-50 h-8 justify-start text-[#3F0D09] text-sm font-['Gilda_Display'] mt-2">Salvattore Reserva Blend</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 330,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

                {/* Produto 12 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho12.png" alt="Vinho 4" />
                    <p className="w-50 h-8 justify-start text-[#3F0D09] text-sm font-['Gilda_Display'] mt-2">Castellamare Barricas</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 180,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

                {/* Produto 13 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho13.png" alt="Vinho 1" />
                    <p className="w-50 h-8 justify-start text-[#3F0D09] text-sm font-['Gilda_Display'] mt-2">Aurora Saperavi</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 129,90</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

                {/* Produto 14 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho14.png" alt="Vinho 2" />
                    <p className="w-50 h-8 justify-start text-[#3F0D09] text-sm font-['Gilda_Display'] mt-2">Gran Reserva Touriga Nacional</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 108,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

                {/* Produto 15 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho15.png" alt="Vinho 3" />
                    <p className="w-50 h-8 justify-start text-[#3F0D09] text-sm font-['Gilda_Display'] mt-2">Vinho Tinto Salton Paradoxo Merlot/Cab Franc/Marselan</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 299,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

                {/* Produto 16 */}
                <div className="w-full h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 mx-auto" src="vinho16.png" alt="Vinho 4" />
                    <p className="w-50 h-8 justify-start text-[#3F0D09] text-sm font-['Gilda_Display'] mt-2">Vinho Tinto Salton Paradoxo Merlot/Cab Franc/Marselan</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-[#3F0D09] text-xl font-['Gilda_Display']">R$ 65,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[29px] flex items-center justify-center">+</button>
                    </div>
                </div>

            </div>
        </div>
    );
}