import React from 'react';

const Signup = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <div className="w-1/2 p-10 flex flex-col my-auto items-center">
        <h1 className="text-3xl font-bold mb-5  font-['Gilda_Display'] text-[#E1D5C2]">Comece aqui</h1>
        <h2 className="text-xl mb-5 font-['Gilda_Display']">Crie sua conta!</h2>

        <form className="grid grid-cols-2 gap-4 w-3/4">
          <div>
            <label className="block mb-1 font-['Gilda_Display']">Nome Completo</label>
            <input
              type="text"
              placeholder="Digite seu nome..."
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-['Gilda_Display']">E-mail</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-['Gilda_Display']">CPF</label>
            <input
              type="text"
              placeholder="Digite seu CPF..."
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-['Gilda_Display']">Gênero</label>
            <select className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none">
              <option>Selecione...</option>
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Outro</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-['Gilda_Display']">Data de Nascimento</label>
            <input
              type="date"
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-['Gilda_Display']">Número de Telefone</label>
            <input
              type="tel"
              placeholder="Digite seu telefone..."
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-['Gilda_Display']">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha..."
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-['Gilda_Display']">Confirme sua Senha</label>
            <input
              type="password"
              placeholder="Confirme sua senha..."
              className="w-full p-2 rounded-lg bg-white text-black border border-gray-700 focus:outline-none"
            />
          </div>
        </form>
        <div className="flex items-center mt-4">
          <input type="checkbox" className="mr-2" />
          <span>Eu concordo com os termos e política de privacidade.</span>
        </div>
        <button className="w-3/4 mt-4 p-2 rounded bg-[#20232A] max-w-60 cursor-pointer focus:outline-none">
          Cadastrar-se
        </button>
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