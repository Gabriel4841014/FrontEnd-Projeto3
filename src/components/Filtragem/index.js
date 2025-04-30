import React from 'react';

export default function Filtragem() {
    return (

        <div className="w-[230px] h-[620] flex mb-auto flex-col bg-[#20232A] pb-10">
                    
                    <div className="h-14 text-2xl mt-6 flex flex-row gap-5">

                    <img className="w-8 h-5 ml-5 mt-1" src="filter.png" alt="Logo" />
                        <h3 className="justify-center text-center">Filtro</h3>
                    </div>

                    <div className="h-0.5 w-full bg-amber-50">
                    </div>
                    

                    <div>
        <h3 className="text-[#E1D5C2] text-[16px] mt-4 ml-4">Categoria</h3>
        <ul className="text-[#E1D5C2] text-[14px] ml-4 mt-4">
            <li>
                <input type="checkbox" id="vinhos-tintos" className="mr-2" />
                <label htmlFor="vinhos-tintos">Vinhos Tintos</label>
            </li>
            <li>
                <input type="checkbox" id="vinhos-brancos" className="mr-2" />
                <label htmlFor="vinhos-brancos">Vinhos Brancos</label>
            </li>
            <li>
                <input type="checkbox" id="vinhos-roses" className="mr-2" />
                <label htmlFor="vinhos-roses">Vinhos Rosés</label>
            </li>
        </ul>
    </div>

    <div className="mb-5">
        <h3 className="text-[#E1D5C2] text-[16px] mt-4 ml-4">Classificação</h3>
        <ul className="text-[#E1D5C2] text-[14px] ml-4 mt-4">
            <li>
                <input type="checkbox" id="seco" className="mr-2" />
                <label htmlFor="seco">Seco</label>
            </li>
            <li>
                <input type="checkbox" id="suave" className="mr-2" />
                <label htmlFor="suave">Suave</label>
            </li>
        </ul>
    </div>

    <div>
        <h3 className="text-[#E1D5C2] text-[16px] mt-4 ml-4">Nícola</h3>
        <ul className="text-[#E1D5C2] text-[14px] ml-4 mt-4">
            <li>
                <input type="checkbox" id="aurora" className="mr-2" />
                <label htmlFor="aurora">Aurora</label>
            </li>
            <li>
                <input type="checkbox" id="fante" className="mr-2" />
                <label htmlFor="fante">Fante</label>
            </li>
            <li>
                <input type="checkbox" id="luiz-argenta" className="mr-2" />
                <label htmlFor="luiz-argenta">Luiz Argenta</label>
            </li>
            <li>
                <input type="checkbox" id="don-guerino" className="mr-2" />
                <label htmlFor="don-guerino">Don Guerino</label>
            </li>
            <li>
                <input type="checkbox" id="garibald" className="mr-2" />
                <label htmlFor="garibald">Garibald</label>
            </li>
            <li>
                <input type="checkbox" id="casa-perini" className="mr-2" />
                <label htmlFor="casa-perini">Casa Perini</label>
            </li>
            <li>
                <input type="checkbox" id="salton" className="mr-2" />
                <label htmlFor="salton">Salton</label>
            </li>
        </ul>
    </div>

    <div>
        <h3 className="text-[#E1D5C2] text-[16px] mt-4 ml-4">Região</h3>
        <ul className="text-[#E1D5C2] text-[14px] ml-4 mt-4">
            <li>
                <input type="checkbox" id="serra-gaucha" className="mr-2" />
                <label htmlFor="serra-gaucha">Serra Gaúcha</label>
            </li>
            <li>
                <input type="checkbox" id="serra-da-canastra" className="mr-2" />
                <label htmlFor="serra-da-canastra">Serra da Canastra</label>
            </li>
        </ul>
    </div>

                </div>
    )
}