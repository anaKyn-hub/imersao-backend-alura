import express from "express";

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

const app = express();
app.use(express.json()); //Express vai devolver JSON

//O app (servidor do express) fica ouvindo/atento pois a qualquer momento alguém pode pedir alguma coisa, mas só vale se a pessoa chegar pela porta 3000 (servidor local) 
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

//Criação da rota e resposta do servidor. O 200 é um status http
app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPost(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPost(req.params.id)
    res.status(200).json(posts[index]);
});