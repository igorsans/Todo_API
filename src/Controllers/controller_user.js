import ModelUser from "../modules/model_usuario.js";
import Db_modder from "../Utils/Db_modder.js";
import User_val from "../Utils/User_val.js";

class Controller_users {
  static controller_users = (app) => {
    app.get("/users", (req, res) => {
      try {
        const users = Db_modder.bdUsers();
        console.log(users);
        res.status(200).json(users);
      } catch (e) {
        res
          .status(404)
          .json({ Msg: "Nenhum usuario cadastrado!", Error: "true" });
      }
    });

    // app.get("/user/:email",(req, res) => {

    // })

    app.post("/users", (req, res) => {
      try {
        const name = User_val.valida_nome(req.body);
        if (name.pass) {
          const user = new ModelUser(...Object.values(req.body));
          const response = Db_modder.insetUser(user);
          res.status(201).json(response);
        } else {
          throw new Error({
            msg: "Falha na criação de usuario",
            Error: "true",
          });
        }
      } catch (e) {
        res
          .status(304)
          .json({ msg: "Falha na criação de usuario", Error: "true" });
      }
    });
  };
}

export default Controller_users;
