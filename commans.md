- npm i typescript -g
  instalar ts global
- npm i ts-node -g
  instalar transpilador ts y node global
- npm i nodemon -g
  server de desarrollo

- tsc --init
  crea config ts

- npm init -y
  inicializa el proyecto

- npm i express cors dotenv multer mongoose
  servidor -framework
  cors -cross origin request site (desde donde se puede acceder a nuestra api/backen)
  dotenv -variables de entorno
  multer -cargar archivo
  mongoose -admin de mongodb

- npm i @types/express @types/cors @types/dotenv @types/multer @types/mongoose -D
  instalando tipados de ts como dependencia de desarrollo

- npm i bcrypt jsonwebtoken
- npm i @types/bcrypt @types/jsonwebtoken
  bcrypt encripta password, jsonwebtoken = jwt, para sesiones de usuario y tokens

- "scripts": {
  "dev": "nodemon ./src/app.ts",
  "build": "tsc",
  "start":"node ./dist/app.js"
  },

MVC Modelo vista controlador no es clean arquitecture
DDD domain driven design no contiene

Conectarse via consola a AWS

- ssh -i ./api_Ts.pem ubuntu@34.229.23.127
- sudo apt-get update
- sudo apt-get upgrade

instalar Nginx

- sudo apt install nginx
- sudo ufw allow 'Nginx HTTP'

check server

- systemctl status nginx

install nodejs

- cd ~
- curl -sL https://deb.nodesource.com/setup_16 -o nodesource_setup.sh
- sudo bash nodesource_setup.sh
- sudo apt-get install nodejs

check version

- node -v
- npm -v

git clone repourl

- git clone git@github.com:JagerMora/express-ts-mongo.git
- cd routeofproject

install packages

- npm install
- sudo npm i typescript -g
- tsc -v
- npm run build

install curl

- sudo apt-get install curl

config mongodb

- curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
- echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
- sudo apt-get update
- sudo apt install mongodb-org

iniciar mongodb

- sudo systemctl start mongod.service
- sudo systemctl status mongod.service

create and config env

- cp .env.example .env
- nano .env
- insert URI to environment variable

ejecutar

- sudo npm install pm2 -g
- node ./dist/app.js
