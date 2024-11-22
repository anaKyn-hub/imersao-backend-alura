import getAllPosts from "../models/postsModels.js";

//Controlador que lidará com a requisição e receberá a resposta
export async function listarPosts(req, res) {
    const result = await getAllPosts();
    //Resposta do servidor com status 200 de sucesso do HTTP
    res.status(200).json(result);
}

