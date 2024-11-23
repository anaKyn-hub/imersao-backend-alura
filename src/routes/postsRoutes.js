//Cria as rotas nos arquivos que irão interagir com o backend
import express from "express";
import multer from "multer";
import { listarPosts, postNewPost, uploadImage } from "../controller/postsController.js";

//Configuração específica do Multer para Windows
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    //Habilita o parser JSON para que ele devolva um resultado nesse formato
    app.use(express.json());
    //Criação da rota GET para pegar todos os post
    app.get("/posts", listarPosts);
    //Criação da rota POST para criar uma postagem
    app.post("/posts", postNewPost);
    //Criação da rota POST para enviar uma única imagem
    app.post("/upload", upload.single("image"), uploadImage);
}

export default routes;