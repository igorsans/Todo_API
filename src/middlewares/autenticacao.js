class autentication {
    static autentication_user = (app) => {
        app.use((req, res, next)=>{
            req.method == "GET" ? next() : 
            req.headers.usertype !== "admin" ? res.json({"erro" : "Acesso negado"}) : next()
        })
    }
}

export default autentication