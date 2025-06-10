'use client'

import { GoTrash } from "react-icons/go";
import React, { useState } from 'react';
import Cookies from 'js-cookie';

export default function Itens({ id, name, price, quantity: initialQuantity, image }) {
  const [quantidade, setQuantidade] = useState(initialQuantity);

  const handleAumentar = () => {
    const newQuantity = quantidade + 1;
    setQuantidade(newQuantity);
    updateCartItem(newQuantity);
  };

  const handleDiminuir = () => {
    if (quantidade > 1) {
      const newQuantity = quantidade - 1;
      setQuantidade(newQuantity);
      updateCartItem(newQuantity);
    }
  };

  const handleRemoveItem = () => {
    const currentCart = JSON.parse(Cookies.get('cart') || '[]');
    const updatedCart = currentCart.filter(item => item.id !== id);
    Cookies.set('cart', JSON.stringify(updatedCart));
    window.location.reload(); // Refresh to update cart
  };

  const updateCartItem = (newQuantity) => {
    const currentCart = JSON.parse(Cookies.get('cart') || '[]');
    const updatedCart = currentCart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    Cookies.set('cart', JSON.stringify(updatedCart));
  };

  return (
    <li className="bg-[#22272f] rounded-lg p-4 flex items-center gap-6 max-w-3xl w-full">
      <div className="border border-white rounded-md w-20 h-24 overflow-hidden">
        <img 
          alt={name}
          className="w-full h-full object-cover"
          src={image}
        />
      </div>
      
      <div className="flex flex-col flex-grow text-xs md:text-lg">
        <span className="leading-tight max-w-[180px] md:max-w-[220px]">
          {name}
        </span>
        <span className="mt-1">
          R$ {price.toFixed(2)}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={handleDiminuir}
          className="text-lg w-8 h-8 bg-[#E1D5C2] text-[#22272f] rounded-full"
        >
          -
        </button>
        <span>{String(quantidade).padStart(2, '0')}</span>
        <button
          onClick={handleAumentar}
          className="text-lg w-8 h-8 bg-[#E1D5C2] text-[#22272f] rounded-full"
        >
          +
        </button>
      </div>

      <button 
        onClick={handleRemoveItem}
        className="text-red-500 hover:text-red-400 p-2 rounded-full hover:bg-red-500/10 transition-colors"
      >
        <GoTrash size={20} />
      </button>
    </li>
  );
}