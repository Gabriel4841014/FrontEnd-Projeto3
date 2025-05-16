"use client"
import { useRouter } from 'next/navigation';
import { VscArrowLeft } from "react-icons/vsc";

export default function BtnVoltar() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <div 
            className="mb-2 mt-20 flex ml-10 mr-auto cursor-pointer" 
            onClick={handleBack}
        >
            <VscArrowLeft className="text-[#E1D5C2] text-2xl font-['Gilda_Display'] mr-2" />
            <p className="text-[#E1D5C2] text-2xl font-['Gilda_Display']">
                Voltar
            </p>
        </div>
    );
}