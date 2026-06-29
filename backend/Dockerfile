# 1. Usa a imagem oficial do Node.js (versão estável LTS)
FROM node:20-alpine

# 2. Cria e define a pasta de trabalho dentro do container
WORKDIR /app

# 3. Copia os arquivos de mapeamento de dependências para o container
COPY package*.json ./

# 4. Instala as dependências de produção do projeto
RUN npm install

# 5. Copia todo o restante do código da pasta backend local para o container
COPY . .

# 6. Expõe a porta interna que o Express vai rodar
EXPOSE 3000

# 7. Comando para ligar o servidor Node em modo de desenvolvimento
CMD ["npm", "run", "dev"]
