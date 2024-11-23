//Responsável por controlar tudo e juntar as rotas com os dados
import {getAllPosts, createPost} from "../models/postsModels.js";
import fs from "fs";

//Controlador que lidará com a requisição e receberá a resposta
export async function listarPosts(req, res) {
    const result = await getAllPosts();
    //Resposta do servidor com status 200 de sucesso do HTTP
    res.status(200).json(result);
}

//Função para criar e enviar um novo post, ao invés de pegar do db
export async function postNewPost(req, res) {
    const newPost = req.body;
    try {
        const createdPost = await createPost(newPost);
        res.status(200).json(createdPost);
    } catch (error){
        console.error(error.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}

export async function uploadImage(req, res) {
    const newPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };
    try {
        const createdPost = await createPost(newPost);
        const updatedImage = `uploads/${createdPost.insertedId}.png`;
        fs.renameSync(req.file.path, updatedImage);
        res.status(200).json(createdPost);
    } catch (error){
        console.error(error.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}