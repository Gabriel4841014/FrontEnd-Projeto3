import React from "react";
import Image from "next/image";

import Missao from "../../../public/missao.png";
import Visao from "../../../public/visao.png";
import Valores from "../../../public/valores.png";

export default function Sobre() {
    return (
        <body>
            <main className="pt-30">

                <div className="w-auto h-auto bg-[#20232A]">
                    <div className="flex flex-col gap-10 justify-center items-center text-center">

                        <h1 className="justify-start mt-10 mb-10 text-[#E1D5C2] text-4xl font-normal font-['Gilda_Display']">Descubra quem somos e o que nos inspira!</h1>

                        <div>
                            <p className="w-[1064px] h-36 text-center justify-start text-[#EAE5E1] text-xl font-['Gilda_Display']">Somos apaixonados por vinhos e comprometidos em oferecer as melhores opções para os apreciadores dessa bebida incrível. Selecionamos rótulos de qualidade, com foco em tradição e inovação, para tornar cada momento mais especial.</p>

                            <p className="w-[1064px] h-36 -mt-7 text-center justify-start text-[#EAE5E1] text-xl font-['Gilda_Display']">Com uma equipe de especialistas, buscamos conectar você aos melhores vinhos, seja para um jantar, presente ou para explorar novos sabores. Descubra o prazer de um bom vinho conosco. Saúde!</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10 justify-center items-center text-center mt-50">

                    {/* Missão */}
                    <div className="flex justify-center items-center text-center">
                        <div className="w-[600px] h-96 bg-[#260401] p-27">
                            <p className="w-36 h-10 mb-5 justify-start text-[#E1D5C2] text-5xl font-['Gilda_Display']">Missão</p>
                            <p className="text-left text-[#FFFFFF] text-2xl font-['Gilda_Display']">Oferecer uma experiência única na compra de vinhos, com qualidade, conveniência e entrega rápida, tornando cada degustação especial.</p>
                        </div>

                        <Image className="w-[600px] h-96 bg-black/20" src={Missao} alt="Imagem de um copo de vinho tinto" />
                    </div>

                    {/* Visão */}
                    <div className="flex justify-center items-center text-center -mt-10">
                        <Image className="w-[600px] h-96 bg-black/20" src={Visao} alt="Imagem de um copo de vinho tinto" />

                        <div className="w-[600px] h-96 bg-[#260401] p-27">
                            <p className="w-160 h-10 mb-5 justify-start text-[#E1D5C2] text-5xl font-['Gilda_Display']">Visão</p>
                            <p className="text-right text-[#FFFFFF] text-2xl font-['Gilda_Display']">Oferecer uma experiência única na compra de vinhos, com qualidade, conveniência e entrega rápida, tornando cada degustação especial.</p>
                        </div>
                    </div>

                    {/* Valores */}
                    <div className="flex justify-center items-center text-center -mt-10">
                        <div className="w-[600px] h-96 bg-[#260401] p-27">
                            <p className="w-36 h-10 mb-5 justify-start text-[#E1D5C2] text-5xl font-['Gilda_Display']">Valores</p>
                            <p className="text-left text-[#FFFFFF] text-2xl font-['Gilda_Display']">Oferecer uma experiência única na compra de vinhos, com qualidade, conveniência e entrega rápida, tornando cada degustação especial.</p>
                        </div>

                        <Image className="w-[600px] h-96 bg-black/20" src={Valores} alt="Imagem de um copo de vinho tinto" />
                    </div>
                </div>

                <div className="flex flex-col gap-10 justify-center items-center text-center mt-50 mb-70">

                    <p className="justify-start text-[#E1D5C2] text-5xl font-['Gilda_Display']">Por que escolher Vivant?</p>

                    <div className="flex gap-10 justify-center items-center text-center mt-10">

                        <div className="w-110 h-60 bg-neutral-800 rounded-[10px]  p-8">
                            <p className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">Seleção de Produtos e Qualidade:</p>
                            <p class="justify-start text-[#FFFFFF] text-xl font-['Gilda_Display'] mt-6">Oferecemos uma curadoria de vinhos de qualidade, com rótulos variados que atendem diferentes gostos e ocasiões, incluindo opções premium e sustentáveis.</p>
                        </div>

                        <div className="w-110 h-60 bg-neutral-800 rounded-[10px]  p-8">
                            <p className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">Experiência do Cliente:</p>
                            <p class="justify-start text-[#FFFFFF] text-xl font-['Gilda_Display'] mt-6">Garantimos um processo de compra simples e intuitivo, com atendimento eficiente, suporte ágil e uma plataforma de fácil navegação.</p>
                        </div>

                        <div className="w-110 h-60 bg-neutral-800 rounded-[10px]  p-8">
                            <p className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">Entrega e Logística:</p>
                            <p class="justify-start text-[#FFFFFF] text-xl font-['Gilda_Display'] mt-6">Oferecemos um serviço de entrega rápida e segura, com embalagens adequadas para preservar a qualidade dos vinhos durante o transporte.</p>
                        </div>
                    </div>

                </div>

            </main>
        </body>
    )
}