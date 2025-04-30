"use client"
import React, { useState } from 'react';
import { BiSortAlt2 } from "react-icons/bi";

export default function BtnOrdenar({ onClick }) {
    const [isOpen, setIsOpen] = useState(false);
    const [sortType, setSortType] = useState('default');
    
    const handleSort = (type) => {
        setSortType(type);
        setIsOpen(false);
    };

    return (
        <div className="relative pb-0 mt-auto mb-1">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center bg-[#E1D5C2] text-black px-4 py-2 rounded-md"
            >
                <BiSortAlt2 className="mr-2" />
                Ordenar por
            </button>
            {isOpen && (
                <div className="absolute top-12 left-0 bg-white shadow-lg rounded-md">
                    <button 
                        onClick={() => handleSort('price-asc')}
                        className="block w-full text-black text-left px-4 py-2 hover:bg-gray-100"
                    >
                        Menor Preço
                    </button>
                    <button 
                        onClick={() => handleSort('price-desc')}
                        className="block w-full text-black text-left px-4 py-2 hover:bg-gray-100"
                    >
                        Maior Preço
                    </button>
                    <button 
                        onClick={() => handleSort('name-asc')}
                        className="block w-full text-black text-left px-4 py-2 hover:bg-gray-100"
                    >
                        Nome A-Z
                    </button>
                    <button 
                        onClick={() => handleSort('name-desc')}
                        className="block w-full text-black text-left px-4 py-2 hover:bg-gray-100"
                    >
                        Nome Z-A
                    </button>
                </div>
            )}
        </div>
    );
}