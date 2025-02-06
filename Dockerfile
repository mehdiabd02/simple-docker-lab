# Utilise une image officielle Node.js comme image de base
FROM node:16

# Crée et définit le répertoire de travail
WORKDIR /usr/src/app

# Copie le package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers du projet dans le conteneur
COPY . .

# Expose le port 3000
EXPOSE 3000

# Lance l'application Node.js
CMD ["node", "app.js"]
