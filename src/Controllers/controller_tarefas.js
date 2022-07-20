
const controller_tarefas = (app) => {
  app.get("/tarefas", (req, res) => {
    res.send("Hello World!");
  });
};

export default controller_tarefas