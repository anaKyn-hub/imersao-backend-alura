//Representa os dados que queremos enviar para o banco de dados

import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Conecta com o banco de dados e a string de conexão é obtida da variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); 

//Função assíncrona para pegar todos os posts da coleção 'posts' no banco 'imersao-backend' e retornar o array com os dados
export async function getAllPosts() {
    const db = conexao.db("imersao-backend");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export async function createPost(newPost) {
    const db = conexao.db("imersao-backend");
    const colecao = db.collection("posts");
    return colecao.insertOne(newPost);
}

export async function updatePost(id, newPost) {
    const db = conexao.db("imersao-backend");
    const colecao = db.collection("posts");
    const objId = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objId)}, {$set:newPost});
}