let db = require("./db");
let Pessoa = require("./model/Pessoa");

async function sincronizar(){
    await db.sync();
}

async function inserir(obj){
    let res = await Pessoa.create(obj)
    console.log(res);
}

let a1 = {nome: "Kayan", sobrenome: "Barros", endereco: "Rua 01 De Aço", telefone: 994131516};
let a2 = {nome: "LKZ", sobrenome: "Silva", endereco: "Rua da Silva", telefone: 994001920};
let a3 = {nome: "Luis", sobrenome: "Costa", endereco: "Rua Mourinho", telefone: 9946613457};
let a4 = {nome: "José", sobrenome: "Borges", endereco: "Rua Maria da costa", telefone: 967548123};
let a5 = {nome: "Leidiane", sobrenome: "Barbosa", endereco: "Rua Assim se oi", telefone: 978456315};
inserir(a1);
inserir(a2);
inserir(a3);
inserir(a4);
inserir(a5);

async function consultar(){
    let resultado = await Pessoa.findAll();
    console.log(resultado[2]);
    console.log(resultado[0]);
    console.log(resultado[1]);
    console.log(resultado[3]);
    console.log(resultado[4]);
}
sincronizar();
consultar();
