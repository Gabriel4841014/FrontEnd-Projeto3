'use client'

export default function Itens({ children }) {
    return (
        <li className="bg-[#22272f] rounded-lg p-4 flex items-center gap-6 max-w-3xl w-full">
      <div className="border border-[#6e7a8a] rounded-md w-15 h-20 flex items-center justify-center">
       <img alt="Garrafa de vinho tinto Sacramentos Sabina Syrah com rótulo vermelho" className="w-12 h-full object-contain" src="https://storage.googleapis.com/a1aa/image/cb99781b-a38f-482c-2094-71c5c3849943.jpg" />
      </div>
      <div className="flex flex-col flex-grow text-xs md:text-sm">
       <span className="leading-tight max-w-[180px] md:max-w-[220px]">
        Sacramentos Sabina Syrah
       </span>
       <span className="mt-1">
        Vinho tinto
       </span>
      </div>
      <div className="flex items-center gap-2 text-xs md:text-sm select-none">
       <button aria-label="Adicionar quantidade" className="text-[#d9cdbf] hover:text-[#f0e6d2] transition">
        +
       </button>
       <span className="w-6 text-center">
        01
       </span>
       <button aria-label="Diminuir quantidade" className="text-[#d9cdbf] hover:text-[#f0e6d2] transition">
        −
       </button>
      </div>
      <span className="text-xs md:text-sm">
       R$500
      </span>
      <button aria-label="Remover item" className="text-[#d9cdbf] hover:text-[#f0e6d2] transition ml-4">
       <i className="fas fa-trash-alt">
       </i>
      </button>
     </li>
    )
}