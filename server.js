import express from "express";

const app = express();

//O app (servidor do express) fica ouvindo/atento pois a qualquer momento alguém pode pedir alguma coisa, mas só vale se a pessoa chegar pela porta 3000 (servidor local) 
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

//Criação da rota e resposta do servidor
app.get("/api", (req, res) => {
    res.status(200).send("Rota Inicial");
});