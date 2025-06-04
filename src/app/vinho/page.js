"use client"
import CardProd from "@/components/CardProd";
import ReviewCard from "@/components/Review";
import { useState } from "react";


export default function WineDetail() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-[1312px] pt-22 mx-auto  text-neutral-100 space-y-8">
      {/* Produto */}
      <div className="bg-[#EAE5E1] rounded-md m-0 p-6 flex  w-[1312px] h-[679px]  flex-row space-y-6 justify-center">
    <div className="w-[1060px] py-[68px] flex row justify-center">
        <img src="vinho1.png" alt="Vinho" className="max-w-[441px] h-auto mx-auto md:mx-0" />
        <div className="space-y-4 my-auto ">
          <h1 className="text-3xl text-[#3F0D09]">Primeira Estrada Gran Reserva Syrah</h1>
          <div className="w-[80%] h-[2px] bg-[#260401]"></div>
          <p className="text-[#260401] max-w-md">Produzido com as uvas do primeiro vinhedo de colheita de inverno, localizado em Três Corações/MG. O desafio da Vinícola foi atingir os limites expressivos do Terroir de Três Corações combinado com a essência da fruta com a nobreza do carvalho. Delicado e elegante, marcado por taninos redondos e poderosos. Um vinho que deixa no paladar uma sensação de equilíbrio e frescor.</p>
          
          <div className="flex flex-row space-x-5">
            <p className="text-2xl font-thin text-[#3F0D09]">R$ 318,00</p>
            <p className="text-md font-thin text-[#3F0D09] my-auto"> 750ml</p>
          </div>
          <div className="flex space-x-4 items-center">
            <button className="bg-[#20232A] cursor-pointer text-white px-4 py-2 rounded flex items-center space-x-2">
      
              <span>Adicionar ao carrinho</span>
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-12 text-black px-2 py-1 rounded"
            />
          </div>
        </div>
        </div>
      </div>

      {/* Informações adicionais */}
      <div className="bg-[#260401] rounded-xl p-6 grid grid-cols-2 md:grid-cols-3 gap-20 text-md text-center">
        <Info title="Classificação" content="Seco" />
        <Info title="Categoria" content="Tinto" />
        <Info title="Gustativo" content="Elegante, taninos sedosos, harmonioso, equilibrado." />
        <Info title="Olfativo" content="Frutas negras maduras, pimenta, especiarias." />
        <Info title="Região" content="Serra da Canastra - Minas Gerais" />
        <Info title="Amadurecimento" content="12 meses em carvalho francês e americano." />
        <Info title="Análise" content="14% vol., 750ml, Acidez moderada." />
        <Info title="Uvas" content="100% Syrah" />
        <Info title="Temperatura" content="16-18 ºC" />
      </div>

      {/* Avaliação */}
      <div className="space-y-4">
        <h2 className="text-3xl text-[#E1D5C2] text-center">Experimente e compartilhe sua opinião!</h2>
        <p className="text-center text-neutral-400">O que achou deste vinho? Sua avaliação é importante para nós!</p>
        <button className="mx-auto block bg-[#EAE5E1] text-black px-29 py-2 rounded">
          Quero avaliar :)
        </button>

        <h3 className="text-2xl text-[#E1D5C2]">Avaliações e Comentários</h3>
        <div className="space-y-4">
          
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
        </div>
        <button className="mx-auto block bg-neutral-700 hover:bg-neutral-600 cursor-pointer text-white px-6 py-2 rounded">
          Mostrar Mais
        </button>
      </div>

      {/* Recomendados */}
      <div>
        <h3 className="text-md font-semibold text-center mb-4">A escolha certa para o seu paladar!</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CardProd name="Vega Sicilia" price="R$ 1.250,00" />
          <CardProd name="Sassicaia" price="R$ 3.200,00" />
          <CardProd name="Gran Estrada" price="R$ 285,00" />
          <CardProd name="Valduero 12 anos" price="R$ 1.123,00" />
        </div>
      </div>
    </div>
  );
}

function Info({ title, content }) {
  return (
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-neutral-400">{content}</p>
    </div>
  );
}

function Review({ name, rating, text }) {
  return (
    <div className="bg-neutral-800 p-4 rounded-lg space-y-2">
      <p className="font-semibold">{name}</p>
      <div className="flex text-yellow-500">
       
      </div>
      <p className="text-neutral-400">{text}</p>
    </div>
  );
}

function RecommendedWine({ name, price }) {
  return (
    <div className="bg-neutral-800 p-4 rounded-lg flex flex-col items-center space-y-2">
      <div className="w-20 h-32 bg-neutral-700"></div> {/* Imagem genérica */}
      <h4 className="text-sm font-semibold">{name}</h4>
      <p className="text-red-500">{price}</p>
    </div>
  );
}
