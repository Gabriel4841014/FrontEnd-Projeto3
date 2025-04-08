import React from 'react';

export default function LadingPage() {
    return (

        <div className="relative h-screen flex flex-col justify-center md:px-16 lg:px-24">
            <img className="absolute pl-70 brightness-65" src="backgroung-home.png" />

            <div className="relative z-10 max-w-lg">
                <p className="text-lg md:text-xl">
                    Viva uma experiência única a cada gole.
                </p>
                <h1 className="text-4xl md:text-6xl mt-4 w-200">
                    Desperte seus sentidos
                </h1>
                <button className="mt-6 px-6 py-3 bg-[#260401] text-white text-lg rounded">
                    Conheça nossa seleção de vinhos!
                </button>
               

            </div>
        </div>
    )
}
