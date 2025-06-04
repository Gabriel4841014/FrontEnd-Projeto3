import React from 'react';
const ReviewCard = () => {
  return (
    <div className="h-au w-full text-white border-2 border-amber-50 rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <img
          src="favicon-16x16.png" // Substitua pelo URL da imagem da pessoa
          alt="Lívia Ventura"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">Lívia Ventura</h2>
          <p className="text-sm text-gray-400">26 de setembro de 2025</p>
        </div>
      </div>
      <p className="mb-4">
        O Sacramentos Sabina Syrah foi uma grata surpresa! Achei o vinho bem equilibrado, com um aroma agradável de frutas vermelhas e um toque leve de especiarias. O sabor é suave, mas com boa estrutura, ideal para quem gosta de vinhos que não sejam muito pesados. Para o preço, é uma excelente escolha, especialmente para acompanhar carnes assadas ou queijos.
      </p>
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-6.18 3.245L5.36 10.64 0 6.635l7.91-1.153L10 0l2.09 5.482L20 6.635l-5.36 3.995L16.18 18.245z" />
          </svg>
        ))}
      </div>
    </div>
  );
};
export default ReviewCard;