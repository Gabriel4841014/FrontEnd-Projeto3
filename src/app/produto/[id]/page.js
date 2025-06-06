"use client"
import CardProd from "@/components/CardProd";
import ReviewCard from "@/components/ReviewCard";
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import FeedbackModal from "@/components/FeedbackModal";

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
  const [users, setUsers] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(3); // Add this state

  const defaultImage = 'vinho1.png'; // Add default image path

  useEffect(() => {
    const fetchWineData = async () => {
      try {
        const response = await fetch(`https://localhost:8000/produtos/${id}`);
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
        const response = await fetch(`https://localhost:8000/avaliacao/${id}`);
        if (!response.ok) throw new Error('Falha ao carregar avaliações');
        
        const data = await response.json();
        console.log('Reviews data:', data);
        
        // Extract the avaliacao array from the response
        const avaliacoes = data.avaliacao || [];
        setReviews(avaliacoes);
        
      } catch (err) {
        console.error('Error loading reviews:', err);
        setReviews([]);
      }
    };

    if (id) {
      fetchReviews();
    }
  }, [id]);

  // Update the users fetch effect
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://localhost:8000/users/');
        if (!response.ok) throw new Error('Falha ao carregar usuários');
        
        const data = await response.json();
        
        // Convert usuarios array to object with CPF as key for easy lookup
        const usersMap = data.usuarios.reduce((acc, user) => {
          acc[user.cpf] = {
            nome: user.nome,
            avatar: user.avatar
          };
          return acc;
        }, {});
        
        setUsers(usersMap);
      } catch (err) {
        console.error('Error loading users:', err);
      }
    };

    fetchUsers();
  }, []);

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
        <button 
          className="mx-auto block cursor-pointer bg-[#EAE5E1] text-black px-29 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Quero avaliar :)
        </button>

        <FeedbackModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          productId={id}
          onSubmit={async (reviewData) => {
            // Refresh reviews after submission
            await fetchReviews();
            setIsModalOpen(false);
          }}
        />

        <h3 className="text-2xl text-[#E1D5C2]">Avaliações e Comentários</h3>
        <div className="space-y-4">
          {reviews && reviews.length > 0 ? (
            <>
              {reviews.slice(0, visibleReviews).map((review) => {
                const user = users[review.usuarioCpf] || {};
                return (
                  <ReviewCard 
                    key={review.idAvaliacao}
                    rating={Number(review.avaliacao)}
                    content={review.conteudo}
                    date={new Date(review.dataCriacao).toLocaleDateString('pt-BR')}
                    userName={user.nome || 'Usuário'}
                    userImage={user.avatar || 'favicon-16x16.png'}
                  />
                )
              })}
              
              {reviews.length > visibleReviews && (
                <button 
                  onClick={() => setVisibleReviews(prev => prev + 3)}
                  className="mx-auto block cursor-pointer bg-[#EAE5E1] text-black px-4 py-2 rounded mt-4 hover:bg-[#d4cdc3]"
                >
                  Ver mais avaliações
                </button>
              )}
            </>
          ) : (
            <p className="text-center text-neutral-400">Nenhuma avaliação disponível.</p>
          )}
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
