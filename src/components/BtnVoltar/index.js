"use client"
import { useRouter } from 'next/navigation';
import { VscArrowLeft } from "react-icons/vsc";
import { FaArrowLeft } from "react-icons/fa6";

export default function BtnVoltar() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <div 
            className="mb-45 mt-18 flex items-center ml-10 mr-auto cursor-pointer" 
            onClick={handleBack}
        >
            <FaArrowLeft className="text-[#E1D5C2] text-xl font-['Gilda_Display'] mr-2" />
            <p className="text-[#E1D5C2] text-xl font-['Gilda_Display']">
                Voltar
            </p>
        </div>
    );
}