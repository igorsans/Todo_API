class Controller_users {
    static controller_users = (app) => {
        app.get("/users", (req, res) => {
          res.send("Hello World!");
        });
        app.post("/users", (req, res) => {
            res.send("Teste de post");
          });
      };
}
  
  export default Controller_users