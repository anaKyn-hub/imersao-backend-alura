//Cria as rotas nos arquivos que irão interagir com o backend
import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postNewPost, uploadImage, updateNewPost } from "../controller/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

//Configuração específica do Multer para Windows
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ dest: "./uploads" , storage});

// Define as rotas usando o objeto Express app
const routes = (app) => {
    //Habilita o parser JSON para que ele devolva um resultado nesse formato
    app.use(express.json());
    app.use(cors(corsOptions));
    //Criação da rota GET para pegar todos os post
    app.get("/posts", listarPosts);
    //Criação da rota POST para criar uma postagem
    app.post("/posts", postNewPost);
    //Criação da rota POST para enviar uma única imagem
    app.post("/upload", upload.single("image"), uploadImage);
    //Criação da rota PUT para atualizar os posts
    app.put("/upload/:id", updateNewPost);
};

export default routes;