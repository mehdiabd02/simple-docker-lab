## Description
Ce projet est une application web utilisant Node.js et MongoDB, déployée dans un environnement Docker. Il permet de gérer des utilisateurs en stockant leurs informations (nom et email) dans une base de données MongoDB. L'application expose une API RESTful pour ajouter, supprimer et afficher des utilisateurs. Une interface web, Mongo Express, est également intégrée pour visualiser et administrer les données dans la base MongoDB.

## Fonctionnalités
- **Ajouter un utilisateur** : L'API permet d'ajouter de nouveaux utilisateurs dans la base de données avec leur nom et email.
- **Afficher les utilisateurs** : L'API fournit une route pour récupérer tous les utilisateurs stockés dans MongoDB.
- **Supprimer un utilisateur** : Les utilisateurs peuvent être supprimés par leur identifiant via une requête DELETE.
- **Interface Mongo Express** : Une interface web est disponible pour consulter, modifier et supprimer des utilisateurs directement depuis Mongo Express.

## Installation

1. Clonez ce dépôt sur votre machine locale :
    ```bash
    git clone https://github.com/ton_nom_utilisateur/docker-lab.git
    ```
2. Allez dans le dossier du projet :
    ```bash
    cd docker-lab
    ```
3. Construisez et lancez les conteneurs Docker :
    ```bash
    docker-compose up --build
    ```
4. Accédez à l'application via l'API :
    - **API** : [http://localhost:3000](http://localhost:3000)
5. Accédez à l'interface Mongo Express :
    - **Mongo Express** : [http://localhost:8081](http://localhost:8081)

## Exemples de requêtes API

- **Ajouter un utilisateur** :
    ```bash
    curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john.doe@example.com"}'
    ```

- **Afficher les utilisateurs** :
    ```bash
    curl http://localhost:3000/users
    ```

- **Supprimer un utilisateur** :
    ```bash
    curl -X DELETE http://localhost:3000/users/<user_id>