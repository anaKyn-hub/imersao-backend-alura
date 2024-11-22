import conectarAoBanco from "../config/dbConfig.js";

// Conecta com o banco de dados e a string de conexão é obtida da variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); 

//Função assíncrona para pegar todos os posts da coleção 'posts' no banco 'imersao-backend' e retornar o array com os dados
export default async function getAllPosts() {
    const db = conexao.db("imersao-backend");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}