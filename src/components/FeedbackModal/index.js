import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

const FeedbackModal = ({ isOpen, onClose, productId, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    const accessToken = Cookies.get('accessToken');
    const myUserData = Cookies.get('userData');
    
    if (!accessToken || !myUserData) {
      alert('Você precisa estar logado para avaliar o produto.');
      return;
    }

    try {
      const userData = JSON.parse(myUserData);
      const userId = userData.id; // Get ID from userData cookie

      // Fetch fresh user data
      const userResponse = await fetch(`https://localhost:8000/users/${userId}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (!userResponse.ok) {
        throw new Error('Falha ao obter dados do usuário');
      }

      const freshUserData = await userResponse.json();
      
      // Create review data with fresh user data
      const reviewData = {
        idUser: String(userId),
        usuarioCpf: String(freshUserData.user.cpf),
        idProduto: Number(productId),
        avaliacao: rating,
        conteudo: content,
        dataCriacao: new Date().toISOString()
      };

      const response = await fetch('https://localhost:8000/avaliacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(reviewData)
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar avaliação');
      }

      // Show success message
      alert('Avaliação enviada com sucesso! Obrigado pelo feedback.');
      
      // Reset form
      setRating(0);
      setContent('');
      
      // Close modal
      onClose();

      // Reload page
      window.location.reload();

    } catch (error) {
      console.error('Error:', error);
      alert('Erro ao enviar avaliação. Tente novamente.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#20232A] rounded-lg shadow-lg w-5xl h-3xl p-20 relative">
        <button 
          className="absolute top-2 right-2 text-[#E1D5C2] hover:text-white text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-[#E1D5C2] text-center">
          Por favor, avalie sua experiência conosco.
        </h2>
        <p className="text-center text-[#E1D5C2]">
          Suas respostas nos ajudam a melhorar!
        </p>
        <div className="mt-4">
          <label className="block text-[#E1D5C2] text-md font-medium mb-2">
            Qual a sua nota para esse produto?
          </label>
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <button
                  type="button"
                  key={ratingValue}
                  className={`text-3xl cursor-pointer focus:outline-none ${
                    ratingValue <= (hover || rating) 
                      ? 'text-yellow-400' 
                      : 'text-gray-400'
                  }`}
                  onClick={() => setRating(ratingValue)}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(rating)}
                >
                  ★
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-[#E1D5C2] text-md font-medium">
            Compartilhe conosco sua experiência!
          </label>
          <textarea
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full border bg-[#E1D5C2] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 text-[#3F0D09] focus:ring-wine-500"
            placeholder="Conte-nos sua experiência com nosso produto!"
          />
        </div>
        <div className="mt-4 flex space-x-2">
          <button 
            className="w-1/2 py-2 px-4 bg-gray-700 text-gray-300 font-semibold rounded-md cursor-pointer hover:bg-gray-400"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button 
            className="w-1/2 py-2 px-4 bg-[#E1D5C2] text-black font-semibold rounded-md cursor-pointer hover:bg-[#d4c9b6]"
            onClick={handleSubmit}
            disabled={!rating || !content}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
