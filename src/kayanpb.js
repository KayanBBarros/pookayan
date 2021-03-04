const {Pool} = require("pg");
async function CriarConexao() {
    const pool = new Pool({

        connectionString:'',
        ssl: {
            rejectUnauthorized: false
        }
    });

   let con = await pool.connect();
    let Pizzaria = await con.query(`
            create table Pessoa(
               id serial primary key, 
               Nome varchar,
               Sobrenome varchar,
               Endereco varchar,

            )`
    );
   await con.query("insert into Pessoa (Nome, Sobrenome, Endereco) values ($1), ($2), ($3), ($4)",
   ["Mariana", "Sebastiana", "João", "Andre"],["Souza", "Bezerra", "Silva"], 
   ["Rua nazare santiago ", "Rua Vinicius Andrade","Rua São João", " Rua Cavalcate"]);
   
   await con.query("update Pessoa set Nome = $1 where id = $2", ["Nayara", 4]);
   await con.query("update Pessoa set Sobrenome = $1 where id = $2", ["Alcantra", 4]);
   await con.query("update Pessoa set Endereco = $1 where id = $2", ["Rua Porto Rico", 2]);

   await con.query("delete from Pessoa where upper(Nome) like 'Nayara'");
   await con.query("delete from Pessoa where upper(Sobrenome) like 'Alcantra'");
   await con.query("delete from Pessoa where upper(endereco) like 'Rua Porto Rico'");

   let res = await con.query("select * from Pessoa");

    let tuplas = res.rows;
    for(let tupla of tuplas) {
        console.log(tupla);
    }
console.log(Pizzaria);
con.release();
   } 
CriarConexao();  
        