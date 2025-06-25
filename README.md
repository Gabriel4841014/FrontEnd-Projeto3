# Vivant - E-commerce de Vinhos
 
Este repositório contém o código-fonte do **Vivant**, um e-commerce de vinhos desenvolvido com Next.js, React e Tailwind CSS. O projeto oferece uma experiência completa de compra, incluindo autenticação, catálogo, carrinho, favoritos, pedidos, avaliações e pagamento.
 
---
 
## Índice
 
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Customização](#customização)
- [Observações](#observações)
- [Licença](#licença)
 
---
 
## Funcionalidades
 
- **Catálogo de Produtos:** Lista de vinhos com filtros e busca.
- **Detalhes do Produto:** Página individual com informações, avaliações e sugestões.
- **Carrinho de Compras:** Adição, remoção e alteração de quantidades.
- **Favoritos:** Salve vinhos preferidos.
- **Pedidos:** Histórico e status dos pedidos.
- **Perfil do Usuário:** Gerenciamento de dados pessoais e endereços.
- **Avaliações:** Avaliação e comentários em produtos.
- **Pagamento:** Checkout com cartão ou Pix, cadastro de endereço.
- **Validação de Maioridade:** Confirmação de idade para acesso ao site.
- **Notificações:** Feedback visual usando react-hot-toast.
 
---
 
## Tecnologias Utilizadas
 
- [Next.js 15 (App Router)](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [js-cookie](https://github.com/js-cookie/js-cookie)
- [jwt-decode](https://github.com/auth0/jwt-decode)
- [react-hot-toast](https://react-hot-toast.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [@react-oauth/google](https://www.npmjs.com/package/@react-oauth/google) (login Google)
- Integração com API RESTful (backend externo)
 
---
 
## Como Rodar o Projeto
 
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/vivant.git
   cd vivant
   ```
 
2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn
   ```
 
3. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env.local` na raiz do projeto com as variáveis necessárias, por exemplo:
     ```
     NEXT_PUBLIC_API_URL=https://localhost:8000
     ```
 
4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
 
5. **Acesse no navegador:**
   [http://localhost:3000](http://localhost:3000)
 
---
 
## Estrutura de Pastas
 
```
├── src/
│   ├── app/              # Páginas principais (home, produto, carrinho, perfil, etc)
│   ├── components/       # Componentes reutilizáveis (cards, botões, modais, etc)
│   ├── styles/           # Estilos globais e configurações do Tailwind
│   └── utils/            # Funções utilitárias e helpers
├── public/               # Imagens e arquivos estáticos
├── .env.local            # Variáveis de ambiente (não versionado)
├── tailwind.config.js    # Configuração do Tailwind CSS
├── postcss.config.mjs    # Configuração do PostCSS
├── next.config.mjs       # Configuração do Next.js
└── package.json
```
 
---
 
## Customização
 
- **Home:** Edite `src/app/page.js` para alterar a página inicial.
- **Produtos:** Ajuste a integração com a API em `src/app/produtos/` ou `src/utils/`.
- **Estilos:** Personalize o tema em `tailwind.config.js` e arquivos em `src/styles/`.
- **Componentes:** Crie ou edite componentes em `src/components/`.
 
---
 
## Observações
 
- O projeto depende de uma API backend rodando em `https://localhost:8000`.
- Certifique-se de que a API está ativa e aceita requisições do frontend.
 
---
 
## Licença
 
Este projeto é apenas para fins educacionais e demonstração.
 
---
 
Desenvolvido por Vivant.