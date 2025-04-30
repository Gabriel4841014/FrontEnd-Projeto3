"use client"
import CardProd from "@/components/CardProd";
import React, { useState } from "react";
import { VscArrowLeft } from "react-icons/vsc";
import Filtragem from "@/components/Filtragem";
import BtnOrdenar from "@/components/BtnOrdenar";


export default function Vitrine() {
    
    return (
        <div className="flex flex-col justify-center items-center p-4">
            <div className="mt-20 flex ml-10 mr-auto">
                <VscArrowLeft className="text-[#E1D5C2] text-2xl font-['Gilda_Display'] mr-2" />
                <p className="text-[#E1D5C2] text-2xl font-['Gilda_Display']">
                    Voltar
                </p>
            </div>

            <div className="max-w-[1380px] h-auto container sm:px-10 flex flex-col">
                <div className="w-full h-auto px-4 sm:px-8 flex flex-row justify-between">
                    
                    <div>
                        <h2 className="text-[#ffffff] text-2xl font-['Gilda_Display'] mt-20 mb-0">
                            Mostrando 0 de 10
                        </h2>
                    </div>

                    <BtnOrdenar></BtnOrdenar>
                </div>

                <div className="h-0.5 w-full bg-white mb-5"></div>
            </div>

            <div className="w-full h-auto px-4 sm:px-8 lg:px-16 bg-[#000002] flex flex-row items-center justify-center gap-5 flex-2/5">
                <Filtragem></Filtragem>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <CardProd />
                    <CardProd />
                    <CardProd />
                    <CardProd />
                    <CardProd />
                    <CardProd />
                    <CardProd />
                    <CardProd />
                    <CardProd />
                    <CardProd />
                    <CardProd />
                    <CardProd />
                    <CardProd />
                    <CardProd />
                </div>
            </div>
        </div>
    );
}