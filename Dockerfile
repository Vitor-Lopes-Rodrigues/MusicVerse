# Estágio 1: Construir a aplicação Node.js
FROM node:18-alpine as backend

# Define o diretório de trabalho dentro do container
WORKDIR /Music/MusicVerse/back-end/

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY . .

# Copia o restante dos arquivos para o diretório de trabalho
COPY back-end/ .

# Define a porta em que o servidor Node.js irá escutar
EXPOSE 3001

# Comando para iniciar a aplicação Node.js
CMD ["npm", "install", "&&", "npm", "run", "start"]

# Estágio 2: Construir a aplicação React
FROM node:18-alpine as frontend

# Define o diretório de trabalho dentro do container
WORKDIR /Music/MusicVerse/front-end/

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY . .


# Copia o restante dos arquivos para o diretório de trabalho
COPY front-end/ .

# Compila a aplicação React
RUN npm run build

# Estágio 3: Executar ambas as aplicações
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia a aplicação Node.js do estágio 1
COPY --from=backend /Music/MusicVerse/back-end/ /Music/MusicVerse/back-end/

# Copia a aplicação React do estágio 2
COPY --from=frontend /Music/MusicVerse/front-end/ /Music/MusicVerse/front-end/

# Expõe as portas dos servidores Node.js e React
EXPOSE 3001
EXPOSE 3000

# Comando para iniciar ambos os servidores
CMD ["npm", "install", "&&", "npm", "run", "start"]
