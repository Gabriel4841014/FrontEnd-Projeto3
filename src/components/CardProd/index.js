import React from "react";

export default function CardProd() {
    return (

            <div className="flex justify-between gap-10 mt-2">

                <div className="w-60 h-auto bg-[#EAE5E1] rounded-[5px] p-6">
                    <img className="w-48 h-60 ml-auto mr-auto" src="vinho1.png" />
                    <p className="w-36 h-8 text-[#3F0D09] text-sm font-['Gilda_Display']">Luiz Argenta LA Jovem Shiraz</p>
                    <div className="w-full h-[1px] bg-[#3F0D09] mt-3"></div>
                    <div className="flex items-center justify-between">
                        <p className="w-28 h-5 mt-1 text-[#3F0D09] text-2xl font-['Gilda_Display']">R$ 144,00</p>
                        <button className="w-8 h-8 text-[#3F0D09] text-[28px] items-center justify-center"> + </button>
                    </div>
                </div>

            </div>
 
    )
}