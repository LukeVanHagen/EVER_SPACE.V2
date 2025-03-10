# Usando a imagem oficial do Node.js
FROM node:16

WORKDIR /app

# Copiar os arquivos de dependências para instalar
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta que o app vai rodar
EXPOSE 8080

# Comando para iniciar o servidor Node.js
CMD ["node", "index.js"]
