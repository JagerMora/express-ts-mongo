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
