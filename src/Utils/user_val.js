class User_val {
  static valida_nome = (usuario) => {
    if (usuario.name.length > 3) return { pass: true, name: usuario.name };
    else throw new Error("Nome Invalido");
  };
  static valida_email = (usuario) => {
    if (usuario.email.length > 4) return { pass: true, email: usuario.email };
    else throw new Error("Email invalido");
  };
  static valida_phone = (usuario) => {
    if (usuario.phone.length > 4) return { pass: true, phone: usuario.phone };
    else throw new Error("Email invalido");
  };
}

export default User_val