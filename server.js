// Importa as dependências necessárias para o servidor Express.
import express from "express";
import routes from "./src/routes/postsRoutes.js";

//Array com os objetos de posts como um banco de dados temporário para demonstração. Em um ambiente real, os dados seriam obtidos do banco de dados. Atualmente não usado no código
const posts = [
  {
    id: 1 ,
    descricao: "Gato assustado",
    imagem: "https://placecats.com/millie/300/150"
  },
  {
    id: 2 ,
    descricao: "Gatinho dormindo",
    imagem: "https://placecats.com/sleepy/300/150"
  },
  {
    id: 3 ,
    descricao: "Olhos de gato",
    imagem: "https://placecats.com/eyes/300/150"
  },
  {
    id: 4 ,
    descricao: "Gato brincando",
    imagem: "https://placecats.com/kitten/300/150"
  },
  {
    id: 5 ,
    descricao: "Gato curioso",
    imagem: "https://placecats.com/cute/300/150"
  },
  {
    id: 6 ,
    descricao: "Gato preto",
    imagem: "https://placecats.com/black/300/150"
  }
];

//Inicializa o Express
const app = express();

routes(app);

//Inicia o app (servidor do express) na porta 3000 (servidor local) e deixa ele ouvindo/atento a algum pedido 
app.listen(3000, () => {
  console.log("Servidor escutando...");
});