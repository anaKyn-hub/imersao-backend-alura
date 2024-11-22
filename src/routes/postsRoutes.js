import express from "express";
import { listarPosts } from "../controller/postsController.js";

const routes = (app) => {
    //Habilita o parser JSON para que ele devolva um resultado nesse formato
    app.use(express.json());
    //Criação da rota GET
    app.get("/posts", listarPosts);
}

export default routes;