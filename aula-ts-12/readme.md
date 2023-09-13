Fiz o processo de subir para o deploy e testei, funcionou tudo certo e já apaguei o deploy, pois, não consegui fazer funcionar direito nesse modelo de repo com várias pastas dentro, então fiz separado só para testar e gerei um texto de apoio para mim:


Para fazer o deploy no render:

Mudar os scripts do package.json para:
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/index.ts",
    "build": "tsc && tsc-alias",
    "start": "node dist/index.js"
  };

Build Command: npm i && nom run build
Start Command: npm run start