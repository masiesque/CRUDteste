const dotenv = require("dotenv");
dotenv.config();

const {Pool}= require("pg");

const pool = new Pool({
 
    host:process.env.DB_HOST,
    password:process.env.DB_PASSWORD,
    user:process.env.DB_USER,
    port:process.env.DB_PORT,
    database:process.env.DB_DATABASE

});

pool.connect()
.then(()=>console.log("Postgres conectado!"))
.catch(err =>{
    process.exit(1);
});


module.exports=pool;
