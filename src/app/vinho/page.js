"use client"

import CardProd from "@/components/CardProd";
import ReviewCard from "@/components/Review";
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';

export default function WineDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [wine, setWine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const reviewsPerPage = 3;

  const defaultImage = '/default-wine.png'; // Add default image path

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  useEffect(() => {
    const fetchWineData = async () => {
      try {
        const response = await fetch(`https://localhost:8000/produtos/1`);
        if (!response.ok) throw new Error('Falha ao carregar dados do vinho');
        const data = await response.json();
        setWine(data.produto); // Adjust to get nested produto object
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWineData();
  }, [id]);

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      try {
        const response = await fetch('https://localhost:8000/produtos/');
        if (!response.ok) throw new Error('Falha ao carregar produtos recomendados');
        const data = await response.json();
        // Get first 3 products
        setRecommendedProducts(data.produtos?.slice(0, 3) || []);
      } catch (err) {
        console.error('Error loading recommended products:', err);
      }
    };

    fetchRecommendedProducts();
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://localhost:8000/avaliacao');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('All reviews:', data);
        
        if (data && Array.isArray(data.avaliacoes)) {
          // Filter reviews for current product
          const productReviews = data.avaliacoes.filter(
            review => review.idProduto === Number(id)
          );
          
          setHasMore(productReviews.length > reviewsPerPage);
        }
      } catch (err) {
        console.error('Error loading reviews:', err);
        setError(err.message);
      }
    };

    fetchReviews();
  }, [id]);

  const handleLoadMore = async () => {
    try {
      const response = await fetch('https://localhost:8000/avaliacao');
      if (!response.ok) throw new Error('Falha ao carregar mais avaliações');
      
      const data = await response.json();
      const productReviews = data.avaliacoes.filter(
        review => review.idProduto === Number(id)
      );
      
      const nextReviews = productReviews.slice(0, (page + 1) * reviewsPerPage);
      setReviews(nextReviews);
      setHasMore(productReviews.length > nextReviews.length);
      setPage(page + 1);
    } catch (err) {
      console.error('Error loading more reviews:', err);
    }
  };

  if (loading) return <div className="text-white pt-24">Carregando...</div>;
  if (error) return <div className="text-red-500 pt-24">Erro: {error}</div>;
  if (!wine) return <div className="text-white pt-24">Vinho não encontrado</div>;

  return (
    <div className="max-w-[1312px] pt-22 mx-auto text-neutral-100 space-y-8">
      {wine && (
        <div className="bg-[#EAE5E1] rounded-md m-0 p-6 flex w-[1312px] h-[679px] flex-row space-y-6 justify-center">
          <div className="w-[1060px] py-[68px] flex row justify-center">
            {wine.fotoVinho ? (
              <img 
                src={wine.fotoVinho} 
                alt={wine.nome || 'Vinho'} 
                className="max-w-[441px] h-auto mx-auto md:mx-0"
                onError={(e) => {
                  e.target.src = defaultImage;
                }}
              />
            ) : (
              <img 
                src={defaultImage}
                alt="Imagem padrão do vinho"
                className="max-w-[441px] h-auto mx-auto md:mx-0"
              />
            )}
            <div className="space-y-4 ml-10 my-auto">
              <h1 className="text-3xl text-[#3F0D09]">{wine.nome}</h1>
              <div className="w-[80%] h-[2px] bg-[#260401]"></div>
              <p className="text-[#260401] max-w-md">{wine.descricao}</p>
              
              <div className="flex flex-row space-x-5">
                <p className="text-2xl font-thin text-[#3F0D09]">R$ {wine.preco?.toFixed(2)}</p>
                <p className="text-md font-thin text-[#3F0D09] my-auto">{wine.volume}ml</p>
              </div>
              <div className="flex space-x-4 items-center">
                <button 
                  className="bg-[#20232A] cursor-pointer text-white px-4 py-2 rounded"
                  onClick={handleAddToCart}
                >
                  Adicionar ao carrinho
                </button>
                <div className="flex items-center border border-[#3F0D09] rounded">
                  <button
                    onClick={decrementQuantity}
                    className="px-3 py-1 text-[#3F0D09] hover:bg-gray-100"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-12 text-center text-[#3F0D09] bg-transparent"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="px-3 py-1 text-[#3F0D09] hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-[#260401] rounded-xl p-6 grid grid-cols-2 md:grid-cols-3 gap-20 text-md text-center">
        <Info title="Classificação" content={wine.classificacao} />
        <Info title="Categoria" content={wine.categoria} />
        <Info title="Gustativo" content={wine.gustativo} />
        <Info title="Olfativo" content={wine.olfativo} />
        <Info title="Região" content={wine.regiao} />
        <Info title="Amadurecimento" content={wine.amadurecimento} />
        <Info title="Análise" content={wine.analises} />
        <Info title="Uvas" content={wine.uvas} />
        <Info title="Temperatura" content={wine.temperatura} />
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
          {reviews.map((review) => (
            <ReviewCard 
              key={review.idAvaliacao}
              rating={review.avaliacao}
              content={review.conteudo}
              date={new Date(review.dataCriacao).toLocaleDateString('pt-BR')}
            />
          ))}
        </div>
      </div>

      {/* Recomendados */}
      <div>
        <h3 className="text-md font-semibold text-center mb-4">A escolha certa para o seu paladar!</h3>
        <div className="flex flex-row justify-center gap-4">
          {recommendedProducts.map((product) => (
            <CardProd
              key={product.idProduto}
              produto={product}
            />
          ))}
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