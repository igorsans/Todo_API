import Controller_tarefas from "./Controllers/controller_tarefas.js";
import Controller_users from "./Controllers/controller_user.js";
import Autenticacao from "./middlewares/autenticacao.js";
import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

app.use(express.json()); 

Autenticacao.autentication_user(app); 
Controller_users.controller_users(app);
Controller_tarefas.controller_tarefas(app);
