import React from "react";
import Image from "next/image";

import Missao from "../../../public/missao.png";
import Visao from "../../../public/visao.png";
import Valores from "../../../public/valores.png";
import BtnVoltar from "@/components/BtnVoltar";

export default function Sobre() {
    return (

        <main className="pt-30">

            <div className="bg-[#20232A]">
                <div className="flex items-center top-0 left-0 w-full h-20 bg-black shadow-lg">
                    <BtnVoltar />
                </div>
                <div className="flex flex-col gap-10 justify-center items-center text-center px-4 sm:px-6 lg:px-10">
                    <h1 className="justify-start mt-10 mb-10 text-[#E1D5C2] text-3xl sm:text-4xl lg:text-5xl font-normal font-['Gilda_Display']">Descubra quem somos e o que nos inspira!</h1>

                    <div>
                        <p className="w-full sm:w-[90%] lg:w-[1064px] h-auto text-center justify-start text-[#EAE5E1] text-lg sm:text-xl lg:text-2xl font-['Gilda_Display'] mb-15">Somos apaixonados por vinhos e comprometidos em oferecer as melhores opções para os apreciadores dessa bebida incrível. Selecionamos rótulos de qualidade, com foco em tradição e inovação, para tornar cada momento mais especial.</p>
                        <p className="w-full sm:w-[90%] lg:w-[1064px] h-auto mt-4 sm:mt-2 lg:mt-0 text-center justify-start text-[#EAE5E1] text-lg sm:text-xl lg:text-2xl font-['Gilda_Display'] mb-10">Com uma equipe de especialistas, buscamos conectar você aos melhores vinhos, seja para um jantar, presente ou para explorar novos sabores. Descubra o prazer de um bom vinho conosco. Saúde!</p>
                    </div>

                </div>
            </div>


            <div className="flex flex-col gap-10 justify-center items-center text-center mt-12 sm:mt-16 md:mt-20 lg:mt-24">

                {/* Missão */}
                <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center text-center">
                    <div className="w-full sm:w-[90%] md:w-[600px] h-auto md:h-96 bg-[#20232A] p-6 sm:p-8 md:p-15">
                        <p className="w-full sm:w-36 h-auto sm:h-10 mb-5 justify-start text-[#E1D5C2] text-3xl sm:text-4xl md:text-5xl font-['Gilda_Display']">Missão</p>
                        <p className="text-left text-[#FFFFFF] text-base sm:text-lg md:text-2xl font-['Gilda_Display']">Oferecer uma experiência única na compra de vinhos, com qualidade, conveniência e entrega rápida, tornando cada degustação especial.</p>
                    </div>

                    <Image className="w-full sm:w-[90%] md:w-[600px] h-auto md:h-96 bg-black/20" src={Missao} alt="Imagem de um copo de vinho tinto" />
                </div>

                {/* Visão */}
                <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center text-center -mt-10">
                    <Image className="w-full sm:w-[90%] md:w-[600px] h-auto md:h-96 bg-black/20" src={Visao} alt="Imagem de um copo de vinho tinto" />

                    <div className="w-full sm:w-[90%] md:w-[600px] h-auto md:h-96 bg-[#20232A] p-6 sm:p-8 md:p-15">
                        <p className="w-full sm:w-210 h-auto sm:h-10 mb-5 justify-start text-[#E1D5C2] text-3xl sm:text-4xl md:text-5xl font-['Gilda_Display']">Visão</p>
                        <p className="text-right text-[#FFFFFF] text-base sm:text-lg md:text-2xl font-['Gilda_Display']">Oferecer uma experiência única na compra de vinhos, com qualidade, conveniência e entrega rápida, tornando cada degustação especial.</p>
                    </div>
                </div>

                {/* Valores */}
                <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center text-center -mt-10">
                    <div className="w-full sm:w-[90%] md:w-[600px] h-auto md:h-96 bg-[#20232A] p-6 sm:p-8 md:p-15">
                        <p className="w-full sm:w-36 h-auto sm:h-10 mb-5 justify-start text-[#E1D5C2] text-3xl sm:text-4xl md:text-5xl font-['Gilda_Display']">Valores</p>
                        <p className="text-left text-[#FFFFFF] text-base sm:text-lg md:text-2xl font-['Gilda_Display']">Oferecer uma experiência única na compra de vinhos, com qualidade, conveniência e entrega rápida, tornando cada degustação especial.</p>
                    </div>

                    <Image className="w-full sm:w-[90%] md:w-[600px] h-auto md:h-96 bg-black/20" src={Valores} alt="Imagem de um copo de vinho tinto" />
                </div>
            </div>


            <div className="flex flex-col gap-10 justify-center items-center text-center mt-12 sm:mt-16 lg:mt-20 mb-16 sm:mb-20 lg:mb-28">
                <p className="justify-start text-[#E1D5C2] text-3xl sm:text-4xl lg:text-5xl font-['Gilda_Display']">Por que escolher Vivant?</p>

                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center items-center text-center mt-10">
                    <div className="w-full sm:w-[300px] lg:w-[350px] h-auto bg-neutral-800 rounded-[10px] p-6 lg:p-8 flex-1 min-h-[300px]">
                        <p className="justify-start text-[#E1D5C2] text-xl sm:text-2xl font-['Gilda_Display']">Seleção de Produtos e Qualidade:</p>
                        <p className="justify-start text-[#FFFFFF] text-base sm:text-lg lg:text-xl font-['Gilda_Display'] mt-3">Oferecemos uma curadoria de vinhos de qualidade, com rótulos variados que atendem diferentes gostos e ocasiões, incluindo opções premium e sustentáveis.</p>
                    </div>

                    <div className="w-full sm:w-[300px] lg:w-[350px] h-auto bg-neutral-800 rounded-[10px] p-6 lg:p-8 flex-1 min-h-[300px]">
                        <p className="justify-start text-[#E1D5C2] text-xl sm:text-2xl font-['Gilda_Display']">Experiência do Cliente:</p>
                        <p className="justify-start text-[#FFFFFF] text-base sm:text-lg lg:text-xl font-['Gilda_Display'] mt-4">Garantimos um processo de compra simples e intuitivo, com atendimento eficiente, suporte ágil e uma plataforma de fácil navegação.</p>
                    </div>

                    <div className="w-full sm:w-[300px] lg:w-[350px] h-auto bg-neutral-800 rounded-[10px] p-6 lg:p-8 flex-1 min-h-[300px]">
                        <p className="justify-start text-[#E1D5C2] text-xl sm:text-2xl font-['Gilda_Display']">Entrega e Logística:</p>
                        <p className="justify-start text-[#FFFFFF] text-base sm:text-lg lg:text-xl font-['Gilda_Display'] mt-4">Oferecemos um serviço de entrega rápida e segura, com embalagens adequadas para preservar a qualidade dos vinhos durante o transporte.</p>
                    </div>

                </div>
            </div>
        </main>
    )
}