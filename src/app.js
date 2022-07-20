import controller_tarefas from "./Controllers/controller_tarefas.js";
import Controller_users from "./Controllers/controller_user.js";
import autenticacao from "./middlewares/autenticacao.js"
import express from "express";

// instancia do sevidor!
const app = express();
// porta que será usada
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});


//middlewares
app.use(express.json()); // middleware que faz o parse do json do body

//middlewares tambem podem ser usados para realizar autenticações
autenticacao.autentication_user(app) //autenticando verbos para usuario

Controller_users.controller_users(app);
controller_tarefas(app);

