class Controller_tarefas {
  static controller_tarefas = (app) => {
    app.get("/tarefas", (req, res) => {
      res.send("Você esta em tarefas");
    });
  };
}

export default Controller_tarefas;