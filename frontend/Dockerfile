# 1. Usa a imagem oficial do Node.js para o ambiente de compilação
FROM node:20-alpine

# 2. Cria e define a pasta de trabalho dentro do container
WORKDIR /app

# 3. Copia os arquivos de mapeamento de dependências
COPY package*.json ./

# 4. Instala as dependências do React
RUN npm install

# 5. Copia todo o código da aplicação React para dentro do container
COPY . .

# 6. Expõe a porta padrão que o React utiliza em desenvolvimento
EXPOSE 3001

# 7. Comando para iniciar o servidor de desenvolvimento do React
CMD ["npm", "start"]
