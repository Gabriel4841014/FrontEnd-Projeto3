'use client';
import React from 'react';

export default function Filtragem({ onFiltroChange }) {
    const handleCheckboxChange = (categoria, valor) => {
        onFiltroChange(categoria, valor);
    };

    const filtros = {
        categoria: [
            { id: 'tinto', label: 'Vinhos Tintos' },
            { id: 'branco', label: 'Vinhos Brancos' },
            { id: 'rose', label: 'Vinhos Rosés' }
        ],
        preco: [
            { id: '0-50', label: 'Até R$ 50' },
            { id: '51-100', label: 'R$ 51 a R$ 100' },
            { id: '101-200', label: 'R$ 101 a R$ 200' },
            { id: '201-500', label: 'R$ 201 a R$ 500' },
            { id: '501', label: 'Acima de R$ 500' }
        ]
    };

    return (
        <div className="w-[230px] h-auto flex mb-auto flex-col bg-[#20232A] pb-10">
            <div className="h-14 text-2xl mt-6 flex flex-row gap-5">
                <img className="w-8 h-5 ml-5 mt-1" src="filter.png" alt="Logo" />
                <h3 className="justify-center text-center text-[#E1D5C2]">Filtro</h3>
            </div>

            <div className="h-0.5 w-full bg-amber-50"></div>

            {Object.entries(filtros).map(([categoria, opcoes]) => (
                <div key={categoria} className="mb-5">
                    <h3 className="text-[#E1D5C2] text-[16px] mt-4 ml-4 capitalize">
                        {categoria === 'preco' ? 'Faixa de Preço' : categoria}
                    </h3>
                    <ul className="text-[#E1D5C2] text-[14px] ml-4 mt-4">
                        {opcoes.map((opcao) => (
                            <li key={opcao.id} className="mb-2">
                                <input
                                    type="checkbox"
                                    id={opcao.id}
                                    className="mr-2"
                                    onChange={(e) => handleCheckboxChange(categoria, {
                                        id: opcao.id,
                                        checked: e.target.checked
                                    })}
                                />
                                <label htmlFor={opcao.id}>{opcao.label}</label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}