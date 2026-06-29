# 🚀 JobBR - Plataforma Multicategorias de Portfólios Profissionais

O **JobBR** é um ecossistema digital focado na conexão direta entre recrutadores e profissionais de diversas áreas do mercado brasileiro (Tecnologia, Construção Civil, Saúde, entre outros). Inspirado em layouts dinâmicos, a plataforma permite a busca rápida por profissionais através de filtragem por níveis de experiência e subcategorias específicas.

---

## 🛠️ Tecnologias Utilizadas

Este repositório contém a versão da estrutura inicial (MVP) do projeto:
- **Frontend:** React.js, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js, JWT, Bcrypt
- **Banco de Dados:** MySQL
- **Containers/Infra:** Docker & Docker Compose 🐳
- **Servidor Web & Proxy Reverso:** Nginx 🌐
- **Testes Automatizados:** Cypress

---

## 🏗️ Arquitetura de Infraestrutura (Docker + Nginx)

Para garantir um ambiente de produção idêntico ao de desenvolvimento e eliminar erros de CORS, a aplicação utiliza o **Nginx como Proxy Reverso** gerenciado via **Docker Compose**:
- **Porta Centralizada:** Centraliza todas as requisições públicas.
- **Roteamento `/api/*`:** O Nginx direciona de forma transparente para o container do Backend (Node.js na porta interna 3000).
- **Roteamento `/`:** O Nginx direciona para o container do Frontend (React.js na porta interna 3001).

---

## 📦 Funcionalidades Planejadas & Em Desenvolvimento (MVP)

- [ ] Cadastro e autenticação segura de usuários (Profissionais e Recrutadores) com JWT.
- [ ] Painel do Profissional para preenchimento de links sociais (GitHub/LinkedIn) e impacto em comunidade.
- [ ] Banco de dados relacional com suporte a Macro-categorias e Subcategorias dinâmicas.
- [ ] Vitrine responsiva (Mobile-First) com filtros avançados integrados à API.

---

## 🔧 Como Executar o Projeto com Docker (Recomendado)

A aplicação está totalmente conteinerizada. O Docker configura o banco de dados, compila o frontend, inicia o servidor backend e estabelece o Nginx como porta de entrada única, sem necessidade de instalar Node ou MySQL localmente na sua máquina de desenvolvimento.

### 📁 Estrutura de Arquivos de Infraestrutura Requerida

Para o ecossistema subir corretamente, o projeto segue a estrutura abaixo na raiz:
```text
jobbr/
├── backend/
│   ├── src/
│   │   └── server.js
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   └── index.js
│   ├── Dockerfile
│   └── package.json
├── nginx.conf
├── docker-compose.yml
└── README.md
```

### 🚀 Passo a Passo para Inicialização

1. **Clonar o Repositório:**
```bash
git clone https://github.com
cd jobbr
```

2. **Configurar as Variáveis de Ambiente:**
Crie um arquivo `.env` dentro da pasta `/backend` utilizando o arquivo `.env.example` como referência para definir as credenciais do banco e chaves JWT.

3. **Construir e Subir os Containers:**
Execute o comando abaixo na raiz do projeto. Ele lerá o `docker-compose.yml`, criará as redes internas isoladas, montará os volumes persistentes do MySQL e compilará as imagens customizadas do React e do Node:
```bash
docker compose up --build -d
```
*(O parâmetro `-d` roda os containers em segundo plano, liberando o seu terminal).*

4. **Acessar os Serviços:**
- **Aplicação Completa (via Nginx):** Acesse `http://localhost` (ou `http://localhost:8080` caso tenha alterado a porta do docker-compose)
- **Logs do Sistema (para Debug):** `docker compose logs -f`

5. **Derrubar o Ambiente:**
Para parar os serviços e manter os dados salvos no banco de dados com segurança:
```bash
docker compose down
```
