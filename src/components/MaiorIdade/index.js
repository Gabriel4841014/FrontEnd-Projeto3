"use client";

import React, { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";

export default function MaiorIdade() {
    const [showVerification, setShowVerification] = useState(false); // 
    const [isVerified, setIsVerified] = useState(false);
    const [showAccessDenied, setShowAccessDenied] = useState(false);

    useEffect(() => {
       
        const ageConfirmed = localStorage.getItem("ageVerified");
        if (ageConfirmed === "true") {
           
            setIsVerified(true);
            setShowVerification(false);
        } else {
           
            setShowVerification(true);
            setIsVerified(false);
        }
    }, []);

    const handleResponse = (isAdult) => {
        if (isAdult) {
         
            localStorage.setItem("ageVerified", "true");
            setShowVerification(false);
            setIsVerified(true);
        } else {
            setShowAccessDenied(true);
            setShowVerification(false);
        }
    };

    const handleClose = () => {
        window.location.href = 'https://www.google.com'; 
    };


    if (isVerified) return null;

    return (
        <>
            {showVerification && !showAccessDenied && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <div className="w-[90%] max-w-[800px] h-auto bg-[#EAE5E1] p-6 md:p-10 rounded-lg text-center">

                        <p className="text-[#260401] text-xl md:text-2xl font-['Gilda_Display'] mb-6 md:mb-10">Boas vindas ao nosso site!</p>
                        <p className="text-[#260401] text-sm md:text-base font-['Gilda_Display'] mb-6 md:mb-10">Para continuar navegando e acessar nossos produtos, precisamos garantir que você tenha a idade mínima exigida para consumo de bebidas alcoólicas.</p>

                        <p className="text-[#260401] text-base md:text-lg font-['Gilda_Display'] mb-6 md:mb-10">Por favor, confirme sua idade:</p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <button
                                onClick={() => handleResponse(true)}
                                className="w-full md:w-50 h-10 p-2 bg-[#20232A] text-white rounded-[10px]"> Tenho 18 anos ou mais
                            </button>

                            <button
                                onClick={() => handleResponse(false)}
                                className="w-full md:w-50 h-10 p-2 bg-[#20232A] text-white rounded-[10px]"> Sou menor de 18 anos
                            </button>
                        </div>

                        <p className="text-[#3F0D09D9] text-xs md:text-sm font-['Gilda_Display'] mt-10 md:mt-20">A Vivant incentiva o consumo responsável de álcool e agradece a sua compreensão.</p>
                    </div>
                </div>
            )}

            {showAccessDenied && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <div className="w-[90%] max-w-[400px] h-auto relative bg-[#20232A] p-6 md:p-10 rounded-lg">

                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-xl text-white"><TfiClose />
                        </button>

                        <p className="text-center text-[#EAE5E1] text-xl md:text-2xl font-['Gilda_Display']">Desculpe, acesso negado!</p>
                        <p className="text-center text-[#EAE5E1] text-sm md:text-base font-['Gilda_Display'] mt-4 md:mt-6">Infelizmente, você precisa ter 18 anos ou mais para acessar nosso site.</p>

                        <button
                            onClick={handleClose}
                            className="w-full mt-6 md:mt-10 p-3 bg-[#E1D5C2] text-black rounded-[5px] font-['Gilda_Display']">Ok, entendi
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}