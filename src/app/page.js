"use client"
import Head from "next/head";
import { useState, useEffect } from "react";
import Topo from "@/components/Topo";
import LadingPage from "@/components/LadingPage";
import CardProd from "@/components/CardProd";
import { useRouter } from 'next/navigation';
import MaiorIdade from "@/components/MaiorIdade";
import Footer from "@/components/Footer";

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("https://localhost:8000/produtos/")
      .then((response) => {
        if (!response.ok) throw new Error("Erro ao buscar produtos");
        return response.json();
      })
      .then((data) => {
        if (data.produtos) {
          setProdutos(data.produtos);
        }
      })
      .catch((error) => console.error("Erro:", error))
      .finally(() => setIsLoading(false));
  }, []);

  const handleNavigateToVitrine = () => {
    router.push('/vitrine');
  };

  return (
    <>
      <Head>
        <title>Vivant - Vinhos Premium</title>
        <meta name="description" content="Vinhos premium para seu prazer" />
      </Head>
      <MaiorIdade />

      <div className="w-full h-auto bg-[#000002]">
        <LadingPage />

        <div className="flex flex-col justify-center items-center p-4 ">
          <h3 className="md:text-3xl text-center mt-8 mb-5 text-[#E1D5C2]">Saiba como escolher o vinho ideal para você!</h3>
          <div className="flex gap-5 flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-12">

            <div className="bg-[#260401] p-6 rounded-lg text-center w-100 h-50">
              <p className="text-[#E1D5C2] mb-2  text-[20px]">Para quem ama frescor e leveza:</p> O vinho branco é perfeito para quem busca algo refrescante e leve. Com sabores de frutas como maçã verde e pêssego, ele é ideal para momentos de celebração ou refeições leves, como saladas e frutos do mar.
            </div>

            <div className="bg-[#260401] p-6 rounded-lg text-center w-100 h-50 mb-20">
              <p className="text-[#E1D5C2] ">Para quem gosta de algo mais intenso:</p> O vinho tinto é ideal. Com sabores mais encorpados e notas de frutas escuras e especiarias, ele proporciona uma experiência rica e marcante para quem aprecia vinhos com mais personalidade.
            </div>

            <div className="bg-[#260401] p-6 rounded-lg text-center w-100 h-50">
              <p className="text-[#E1D5C2] mb-2 text-[20px]">Para quem prefere algo mais doce:</p> O vinho rosé é uma ótima opção. Ele tem um equilíbrio entre a leveza do vinho branco e a suavidade do vinho tinto, com sabores de frutas vermelhas e um toque de doçura, ideal para quem gosta de algo mais suave.
            </div>
          </div>

          <h1 className="text-center md:text-3xl mb-8 text-[#E1D5C2] mt-25">Descubra os vinhos mais especiais da nossa seleção!</h1>

          <div className="grid gap-8 w-2/4 mt-15">
            <div className="bg-[#20232A] rounded-lg overflow-hidden flex flex-col md:flex-row mb-5">
              <img alt="Garrafa de vinho tinto com taças" className="w-full md:w-1/2 object-cover rounded-lg" height="400" src="vinho_tinto.png" width="600" />
              <div className="p-6 md:p-8 flex flex-col justify-center ml-5">
                <h2 className="text-[16px] mb-2 text-[#E1D5C2]"> Conheça Nossos: </h2>
                <h3 className="text-2xl md:text-3xl mb-4"> Vinhos Tintos </h3>
                <hr className="w-35 ml-8 mt-0 mb-4 text-[#E1D5C2]" />
                <p className="mb-4">Intensos, encorpados e repletos de aromas marcantes, os vinhos tintos brasileiros são perfeitos para quem aprecia sabor e tradição.</p>
                <p className="mb-4 text-[#E1D5C2]">Ideias para harmonizar com:</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Carnes</li>
                  <li>Queijos curados</li>
                  <li>Momentos especiais</li>
                </ul>
                <button 
                  onClick={handleNavigateToVitrine}
                  className="bg-[#3F0D09] text-white py-1 px-4 rounded-md w-45 hover:opacity-90 transition-opacity"
                >
                  Compre conosco
                </button>
              </div>
            </div>

            <div className="bg-[#20232A] rounded-lg overflow-hidden flex flex-col md:flex-row-reverse mb-5">
              <img alt="Garrafa de vinho branco com taças" className="w-full md:w-1/2 object-cover rounded-lg" height="400" src="vinho_branco.png" width="600" />

              <div className="p-6 md:p-8 flex flex-col justify-center ml-5">

                <h2 className="text-[16px] mb-2 text-[#E1D5C2]">Conheça Nossos:</h2>
                <h3 className="text-2xl md:text-3xl">Vinhos Brancos</h3>
                <hr className="w-40 ml-8 mt-4 mb-4 text-[#E1D5C2]" />
                <p className="mb-4">Leves, refrescantes e aromáticos, os vinhos brancos brasileiros são perfeitos para quem busca frescor em cada gole.</p>
                <p className="mb-4 text-[#E1D5C2]">Ideias para harmonizar com:</p>

                <ul className="list-disc list-inside mb-4">
                  <li>Frutos do mar</li>
                  <li>Queijos suaves</li>
                  <li>Dias ensolarados</li>
                </ul>

                <button 
                  onClick={handleNavigateToVitrine}
                  className="bg-[#3F0D09] text-white py-2 px-4 rounded-md w-45 hover:opacity-90 transition-opacity"
                >
                  Compre conosco
                </button>
              </div>
            </div>

            <div className="bg-[#20232A] rounded-lg overflow-hidden flex flex-col md:flex-row">
              <img alt="Garrafa de vinho rosé com taças" className="w-full md:w-1/2 object-cover rounded-lg" height="400" src="Rosé Season _ Wine photography, Wine, Wine knowledge.png" width="600" />

              <div className="p-6 md:p-8 flex flex-col justify-center ml-5">
                <h2 className="text-[16px] mb-2 text-[#E1D5C2]">Conheça Nossos:</h2>
                <h3 className="text-2xl md:text-3xl mb-4">Vinhos Rosés</h3>
                <hr className="w-32 ml-8 mt-0 mb-4 text-[#E1D5C2]" />
                <p className="mb-4">Leves e vibrantes, os vinhos rosés oferecem um equilíbrio perfeito entre a frescura dos brancos e a intensidade dos tintos.</p>
                <p className="mb-4 text-[#E1D5C2]">Ideias para harmonizar com:</p>

                <ul className="list-disc list-inside mb-4">
                  <li>Saladas</li>
                  <li>Queijos suaves</li>
                  <li>Dias quentes</li>
                </ul>

                <button 
                  onClick={handleNavigateToVitrine}
                  className="bg-[#3F0D09] text-white py-2 px-4 rounded-md w-45 hover:opacity-90 transition-opacity"
                >
                  Compre conosco
                </button>
              </div>
            </div>

          </div>

          <div className="flex flex-col items-center mt-20">
            <div className="text-center mb-10">
              <h2 className="text-[#E1D5C2] text-4xl font-['Gilda_Display']">
                Nossos produtos mais vendidos
              </h2>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#E1D5C2]"></div>
              </div>
            ) : (
              <div className="w-[1280px] h-auto ml-auto mr-auto mt-10 mb-20 p-7 items-center bg-[#000002] flex flex-row gap-5 content-center justify-center">
                {produtos.slice(0, 4).map((produto) => (
                  <CardProd key={produto.idProduto} produto={produto} />
                ))}
              </div>
            )}
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}