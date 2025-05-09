"use client";

import React, { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";

export default function MaiorIdade() {
    const [showVerification, setShowVerification] = useState(true);
    const [isVerified, setIsVerified] = useState(false);
    const [showAccessDenied, setShowAccessDenied] = useState(false);

    useEffect(() => {
        const ageConfirmed = localStorage.getItem("ageVerified");
        if (ageConfirmed) {
            setIsVerified(true);
        } else {
            setShowVerification(true);
        }
    }, []);

    const handleResponse = (isAdult) => {
        if (isAdult) {
            localStorage.setItem("ageVerified", "true");
            setShowVerification(false);
            setIsVerified(true);
        } else {
            setShowAccessDenied(true);
        }
    };

    const handleClose = () => {
        setShowAccessDenied(false);
        setShowVerification(true);
    };

    if (!showVerification && isVerified) return null;

    return (
        <>
            {showVerification && !showAccessDenied && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <div className="w-[800px] h-110 bg-stone-200 bg-[#260401] p-10 rounded-lg text-center">

                        <p className="justify-start text-[#260401] text-2xl font-['Gilda_Display'] mb-10">Boas vindas ao nosso site!</p>
                        <p className="text-center justify-start text-[#260401] text-base font-['Gilda_Display'] mb-10">Para continuar navegando e acessar nossos produtos, precisamos garantir que você tenha a idade mínima exigida para consumo de bebidas alcoólicas.</p>

                        <p className="justify-start text-[#260401] text-lg font-['Gilda_Display'] mb-10">Por favor, confirme sua idade:</p>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => handleResponse(true)}
                                className="w-50 h-10 p-1 bg-[#20232A] rounded-[10px]"> Eu tenho 18 anos ou mais.
                            </button>

                            <button
                                onClick={() => handleResponse(false)}
                                className="w-50 h-10 p-2 bg-[#20232A] rounded-[10px]"> Eu sou menor de 18 anos.
                            </button>
                        </div>

                        <p className="justify-start text-red-950/90 text-sm font-['Gilda_Display'] mt-20">A Vivant incentiva o consumo responsável de álcool e agradece a sua compreensão.</p>
                    </div>
                </div>
            )}

            {showAccessDenied && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <div className="w-100 h-65 relative bg-[#20232A] p-10">

                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-3 text-xl" ><TfiClose />
                        </button>

                        <p class="justify-start text-center text-[#EAE5E1] text-2xl font-['Gilda_Display']"> Desculpe, acesso negado!</p>
                        <p class="text-center justify-start text-[#EAE5E1] text-base font-['Gilda_Display'] mt-6"> Infelizmente, você precisa ter 18 anos ou mais para acessar nosso site. </p>

                        <button
                            onClick={handleClose}
                            className="text-black w-auto h-auto p-3 bg-[#E1D5C2] rounded-[5px] font-['Gilda_Display'] mt-10 ml-25 mr-auto"> Ok, entendi
                        </button>

                    </div>
                </div>
            )}
        </>
    );
}
