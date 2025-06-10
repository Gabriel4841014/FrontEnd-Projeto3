'use client';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { PiShoppingCartThin } from "react-icons/pi";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import BtnVoltar from '@/components/BtnVoltar';


const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const storedUserData = Cookies.get('userData');
                const accessToken = Cookies.get('accessToken');

                if (!storedUserData || !accessToken) {
                    console.error('Dados do usuário não encontrados');
                    return;
                }

                const { id } = JSON.parse(storedUserData);
                
                const response = await fetch(`https://localhost:8000/users/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Falha ao carregar dados do usuário');
                }

                const data = await response.json();
                // Acessar o objeto usuario da resposta
                setUserData(data.user);
                console.log('Dados do usuário:', data.user); // Para debug
            } catch (error) {
                console.error('Erro ao carregar dados:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleEditClick = (e) => {
        e.preventDefault();
        setIsEditing(true);
    };

    // Add handleInputChange function
    const handleInputChange = (field, value) => {
        setEditedData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Update handleSaveClick
    const handleSaveClick = async () => {
        try {
            const storedUserData = Cookies.get('userData');
            const accessToken = Cookies.get('accessToken');

            if (!storedUserData || !accessToken) {
                alert('Dados do usuário não encontrados');
                return;
            }

            const { id } = JSON.parse(storedUserData);

            // Remove masks from data before sending
            const removeMasks = (data) => {
                const unmaskedData = { ...data };
                
                if (unmaskedData.cpf) {
                    unmaskedData.cpf = unmaskedData.cpf.replace(/\D/g, '');
                }
                if (unmaskedData.telefone) {
                    unmaskedData.telefone = unmaskedData.telefone.replace(/\D/g, '');
                }
                if (unmaskedData.nascimento) {
                    unmaskedData.nascimento = unmaskedData.nascimento.replace(/\D/g, '');
                }
                
                return unmaskedData;
            };

            // Combine and unmask data
            const updatedData = removeMasks({
                ...userData,
                ...editedData
            });

            // Send PUT request
            const response = await fetch(`https://localhost:8000/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(updatedData)
            });

            if (!response.ok) {
                throw new Error('Falha ao atualizar dados');
            }

            // Get updated user data
            const result = await response.json();
            
            // Update local state
            setUserData(result.usuario);
            setIsEditing(false);
            setEditedData({});

            // Show success message
            alert('Dados atualizados com sucesso!');
            window.location.reload();
        } catch (error) {
            console.error('Erro ao salvar:', error);
            alert('Erro ao salvar alterações. Tente novamente.');
        }
    };

    if (loading) {
        return <div className="text-white">Carregando...</div>;
    }

    return (
        <section className="flex gap-50 bg-[#000002] text-white p-30">
              <BtnVoltar />
            <div className="mt-10">
                <div className="">
                    <h1 className="text-[#E1D5C2] text-3xl font-['Gilda_Display']">
                        Olá, {userData?.nome || '[Nome do Usuário]'}!
                    </h1>
                    <p className="w-85 text-[#EAE5E1] font-['Gilda_Display'] mt-3 mb-15">Bem-vindo ao seu espaço exclusivo. Aqui você pode gerenciar seus dados e acompanhar seus pedidos.</p>
                </div>

                <nav className="w-1/4 p-4 bg-[#000002]">
                    <ul>
                        <li className="w-60 mb-10 flex gap-4 text-center"><PiShoppingCartThin className="size-7 text-[#E1D5C2]" /> <a href="#" className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">Minha conta</a></li>
                        <li className="w-60 mb-10 flex gap-4 text-center"><PiShoppingBagOpenThin className="size-7 text-[#E1D5C2]" /> <a href="#" className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">Meus pedidos</a></li>
                        <li className="w-60 mb-10 flex gap-4 text-center"><IoIosHeartEmpty className="size-7 text-[#E1D5C2]" /> <a href="#" className="justify-start text-[#E1D5C2] text-2xl font-['Gilda_Display']">Meus favoritos</a></li>
                    </ul>
                </nav>
            </div>

            <div className="mt-10">
                <p className="justify-start text-[#FFFFFF] text-3xl font-['Gilda_Display'] mb-7">Meu perfil</p>
                <div className="bg-[#000002] rounded-lg p-20 border border-[#EAE5E1]">

                    <div className="flex items-center gap-132 mb-10">
                        <div className="flex items-center gap-6 ml-4">
                            <div className="w-20 h-20 bg-zinc-300 rounded-full">
                                {userData?.avatar && (
                                    <img 
                                        src={userData.avatar} 
                                        alt="Avatar" 
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                )}
                            </div>
                            <p className="justify-start text-white text-xl font-['Gilda_Display']">
                                {userData?.nome || '[Nome do usuário]'}
                            </p>
                        </div>

                        <button 
                            onClick={handleEditClick}
                            className="w-30 h-8 p-2 bg-[#20232A] rounded-[5px]"
                        >
                            <div className="flex items-center gap-2 justify-center">
                                <CiEdit className="size-4 text-[#FFFFFF]" />
                                <span className="text-[#EAE5E1] cursor-pointer text-xs font-['Gilda_Display']">
                                    Editar perfil
                                </span>
                            </div>
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 ml-30 mr-30">
                        <InputField 
                            label="Nome Completo" 
                            value={(editedData.nome !== undefined ? editedData.nome : userData?.nome) || '[Nome completo do usuário]'}
                            onChange={(value) => handleInputChange('nome', value)}
                            readOnly={!isEditing}
                        />
                        <InputField 
                            label="CPF" 
                            value={userData?.cpf || '00000000000'} 
                            type="cpf"
                            readOnly={true} // CPF should always be readonly
                        />
                        <InputField 
                            label="E-mail" 
                            value={(editedData.email !== undefined ? editedData.email : userData?.email) || 'email@gmail.com'}
                            onChange={(value) => handleInputChange('email', value)}
                            readOnly={!isEditing}
                        />
                        <InputField 
                            label="Gênero" 
                            value={(editedData.sexo !== undefined ? editedData.sexo : userData?.sexo) || 'Não informado'}
                            onChange={(value) => handleInputChange('sexo', value)}
                            readOnly={!isEditing}
                        />
                        <InputField 
                            label="Data de Nascimento" 
                            value={(editedData.nascimento !== undefined ? editedData.nascimento : userData?.nascimento) || '00000000'}
                            onChange={(value) => handleInputChange('nascimento', value)}
                            type="date"
                            readOnly={!isEditing}
                        />
                        <InputField 
                            label="Número de Telefone" 
                            value={(editedData.telefone !== undefined ? editedData.telefone : userData?.telefone) || '00000000000'}
                            onChange={(value) => handleInputChange('telefone', value)}
                            type="phone"
                            readOnly={!isEditing}
                        />
                    </div>

                    {isEditing && (
                        <button 
                            onClick={handleSaveClick}
                            className="w-40 h-12 bg-[#20232A] rounded-[5px] items-center justify-center mt-15 ml-107 mr-107"
                        >
                            <p className="text-[#EAE5E1] cursor-pointer text-[17px] font-['Gilda_Display']">
                                Salvar mudanças
                            </p>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

const InputField = ({ label, value, type, readOnly, onChange }) => {
    const formatValue = (val, type) => {
        if (!val) return '';
        
        // Remove all non-digits
        const numbers = val.replace(/\D/g, '');
        
        switch (type) {
            case 'cpf':
                return numbers
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                    .replace(/(-\d{2})\d+?$/, '$1');
                
            case 'phone':
                return numbers
                    .replace(/(\d{2})(\d)/, '($1) $2')
                    .replace(/(\d{5})(\d)/, '$1-$2')
                    .replace(/(-\d{4})\d+?$/, '$1');
                
            case 'date':
                return numbers
                    .replace(/(\d{2})(\d)/, '$1/$2')
                    .replace(/(\d{2})(\d)/, '$1/$2')
                    .replace(/(\d{4})\d+?$/, '$1');
                
            default:
                return val;
        }
    };

    const formattedValue = formatValue(value, type);

    return (
        <div>
            <label className="block mb-1 justify-start text-[#E1D5C2] text-base font-['Gilda_Display']">
                {label}
            </label>
            <input
                type="text"
                value={formattedValue}
                onChange={(e) => onChange && onChange(e.target.value)}
                readOnly={readOnly}
                className={`w-90 h-10 p-2 rounded-[5px] justify-start font-['Gilda_Display'] ${
                    readOnly 
                        ? 'bg-[#EAE5E1] text-[#3F0D0980]' 
                        : 'bg-white text-black'
                }`}
            />
        </div>
    );
};

export default Profile;