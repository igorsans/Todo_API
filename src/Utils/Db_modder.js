import DB from "../DataBase/Database.js"

class Db_modder{
    static insetUser(usuario){
        DB.Usuarios = [...DB.Usuarios, usuario]
        return DB.Usuarios
    }
    static bdUsers(){
        if (DB.Usuarios.length == 0) throw new Error("Nenhum usuario cadastrado!")
        else return DB.Usuarios
    }
}

export default Db_modder
