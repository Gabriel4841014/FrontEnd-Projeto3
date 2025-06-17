"use client"
import Image from 'next/image';

export default function CardPedido({ 
    imageSrc, 
    productName, 
    price, 
    quantity,
    orderNumber,
    orderDate,
    status,
    address 
}) {
    return (
        <div className="mt-10">
            <div className="w-full h-full bg-[#EAE5E1] rounded-[10px] border-l-[6px] border-[#3F0D09] grid grid-cols-2 gap-20">
                <div className="grid grid-cols-2 gap-4 p-3">
                    <Image
                        src={imageSrc}
                        alt={productName}
                        width={200}
                        height={280}
                        className="w-50 h-70 rounded-[10px] border border-[#3F0D09] object-cover m-3"
                    />

                    <div className="flex flex-col justify-between m-3">
                        <h3 className="w-60 justify-start text-[#3F0D09] text-2xl font-['Gilda_Display']">
                            {productName}
                        </h3>
                        <h3 className="justify-start text-[#3F0D09] text-3xl font-['Gilda_Display']">
                            R$ {price.toFixed(2)}
                        </h3>
                        <p className="justify-start text-[#260401] text-xl font-['Gilda_Display']">
                            Quantidade: {quantity}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-between mt-6">
                    <h3 className="justify-start text-[#3F0D09] text-2xl font-['Gilda_Display']">
                        #{orderNumber} - {orderDate}
                    </h3>
                    <h3 className="justify-start text-[#3F0D09] text-3xl font-['Gilda_Display']">
                        {status}
                    </h3>
                    <p className="w-80 h-3.5 justify-center text-[#260401] text-2xl font-['Gilda_Display']">
                        Endereço de entrega:
                    </p>
                    <p className="justify-start text-[#260401] text-[17px] font-['Gilda_Display'] mr-6 -mt-2">
                        {address}
                    </p>
                    <button className="w-37 h-10 p-2 bg-[#20232A] rounded-[10px] mb-6">
                        <a href="#" className="w-24 h-3 justify-center text-[#EAE5E1] text-[13px] font-['Gilda_Display']">
                            Acompanhar entrega
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}