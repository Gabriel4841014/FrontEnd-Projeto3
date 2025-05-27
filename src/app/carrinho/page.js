import Itens from "@/components/Itens"
import React from "react"

export default function Carrinho() {
    return(
        <main className="max-w-6xl ml-100 w-full items-center flex md:flex-row md:gap-20">
   <section className="flex flex-col mt-10 gap-6 max-w-3xl w-full">
    <header className="flex justify-between  items-center">
     <h1 className="text-lg md:text-2xl mb-10">
      Carrinho
     </h1>
     <span className="text-xs mb-10 md:text-lg ">
      3 items
     </span>
    </header>
    <hr className="border-t mb-10 border-[#EAE5E1]"/>
    <ul className="flex flex-col gap-4">
     <Itens/>
     <Itens/>
     <Itens/>
    </ul>
   </section>



   <aside className="bg-[#22272f] rounded-lg p-8 max-w-md w-full h-170 mt-50 flex flex-col gap-6">
    <h2 className="text-3xl mt-5 mb-5">
     Detalhes da compra
    </h2>


    <ul className="flex flex-col gap-5 text-xs md:text-lg ">

     <li className="flex justify-between">
      <span>
       Sacramentos Sabina Syrah
      </span>
      <span className="text-[#E1D5C2]">
       R$ 500,00
      </span>
     </li>

     <li className="flex justify-between">
      <span>
       Primeira Estrada Gran
      </span>
      <span className="text-[#E1D5C2]">
       R$ 339,00
      </span>
     </li>

     <li className="flex justify-between">
      <span>
       Vinho Branco Salton Virtude
      </span>
      <span className="text-[#E1D5C2]"> 
       R$ 350,00
      </span>
     </li>
    </ul>


    <div>
     <label className="block text-xl mt-5 mb-8">
      Cupom
     </label>

     <div className="flex border border-[#d9cdbf] rounded-md overflow-hidden">
      <input className="bg-[#EAE5E1] text-xs md:text-sm text-[#4a4a4a] px-4 py-2 w-full outline-none" id="cupom" type="text" defaultValue="CHIKAMSO-20-OFF"/>
      <button className="bg-[#EAE5E1] text-xs md:text-sm text-[#4a4a4a] px-4 py-2 border-l border-[#d9cdbf] hover:bg-[#e6d9c2] transition " type="button">
       Aplicar
      </button>
     </div>
    </div>
    <hr className="border-t mt-5 mb-15 border-[#EAE5E1]"/>
    <div className="flex justify-between text-xs md:text-lg ">
     <span>
      Subtotal
     </span>
     <span>
      R$1.668
     </span>
    </div>

  <a href="/pagamento" className="bg-[#f0e6d2] text-[#4a4a4a] text-base md:text-lg rounded-md py-4 px-6 flex items-center justify-between hover:bg-[#e6d9c2] transition">
  <span>Finalizar</span>
  <i className="fas fa-arrow-right"></i>
  </a>
    
    
   </aside>
  </main>
    )
}