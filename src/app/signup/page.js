"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    sexo: '',
    telefone: '',
    nascimento: '',
    password: '',
    confirmPassword: '',
    avatar: 'https://i.imgur.com/default-avatar.png'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const formatCPF = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const formatPhone = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cpf') {
      formattedValue = formatCPF(value);
    } else if (name === 'telefone') {
      formattedValue = formatPhone(value);
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const validateForm = () => {
    if (!formData.nome || !formData.email || !formData.cpf || !formData.sexo || 
        !formData.telefone || !formData.nascimento || !formData.password) {
      setError('Preencha todos os campos obrigatórios');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      return false;
    }
    if (!formData.terms) {
      setError('Você precisa aceitar os termos de uso');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://localhost:8000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cpf: formData.cpf.replace(/\D/g, ''),
          nome: formData.nome,
          email: formData.email,
          sexo: formData.sexo,
          telefone: formData.telefone.replace(/\D/g, ''),
          nascimento: formData.nascimento.split('-').join(''),
          password: formData.password,
          avatar: formData.avatar
        })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Erro ao cadastrar');
      }

      router.push('/login');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      <div className="w-1/2 p-10 flex flex-col my-auto items-center">
        <h1 className="text-3xl font-bold mb-5 font-['Gilda_Display'] text-[#E1D5C2]">Comece aqui</h1>
        <h2 className="text-xl mb-5 font-['Gilda_Display']">Crie sua conta!</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 w-3/4">
          <div>
            <label className="block mb-1 font-['Gilda_Display']">Nome Completo</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite seu nome..."
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-['Gilda_Display']">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-['Gilda_Display']">CPF</label>
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              placeholder="000.000.000-00"
              maxLength="14"
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-['Gilda_Display']">Gênero</label>
            <select 
              name="sexo"
              value={formData.sexo}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none"
            >
              <option value="">Selecione...</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-['Gilda_Display']">Data de Nascimento</label>
            <input
              type="date"
              name="nascimento"
              value={formData.nascimento}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-['Gilda_Display']">Número de Telefone</label>
            <input
              type="text"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              maxLength="15"
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-['Gilda_Display']">Senha</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Digite sua senha..."
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-['Gilda_Display']">Confirme sua Senha</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirme sua senha..."
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none"
            />
          </div>
          <div className="col-span-2 flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={(e) => setFormData(prev => ({...prev, terms: e.target.checked}))}
              className="w-4 h-4 accent-[#E1D5C2]"
            />
            <label className="text-sm text-[#E1D5C2] font-['Gilda_Display']">
              Eu li e aceito os termos de uso e política de privacidade
            </label>
          </div>

          <button
            type="submit"
            disabled={loading || !formData.terms}
            className="col-span-2 w-full p-2 mt-4 bg-[#E1D5C2] text-black rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>
        <div className="text-center mt-4">OU</div>
        <button className="w-3/4 mt-4 flex items-center justify-center p-2 rounded cursor-pointer max-w-60 bg-[#EAE5E1] text-[#260401] focus:outline-none">
          <span>Cadastrar-se com o Google</span>
        </button>
      </div>

      <div className="w-1/2 bg-[#20232A] p-10 flex flex-col items-center justify-center text-center">
        <img src='Vivanti.png'></img>
        <h2 className="text-3xl mb-5 font-['Gilda_Display']">De Volta ao Sabor!</h2>
        <p className="mb-5 mx-auto text-center max-w-150">
          Seja bem-vindo de volta! Entre na sua conta e continue descobrindo
          rótulos selecionados, perfeitos para os momentos que merecem um vinho
          à altura.
        </p>
        <button className="p-2  bg-[#EAE5E1] text-[#260401] rounded-sm focus:outline-none">
          Já é cadastrado? Entre
        </button>
      </div>
    </div>
  );
};

export default Signup;