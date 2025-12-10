const pool = require("../config/db");

const getById = async (req,res)=>
{
    try{
        const id= req.params.id;

        const result = await pool.query(`
            SELECT * from users
            WHERE id =$1`,
        [id]);

        if(result.rows.length === 0)
        {
            return res.status(404).json({
                message: "User not found",
                erro: err
            });
        };
        res.status(200).json({
            message:"User creted sucessfully.",
            User: result.rows[0]
        });

    }catch(err)
    {
        res.status(500).json({erro:err.message});
    }


};

const getByName = async (req, res) => {
    try {
        const name = req.query.name;

        const result = await pool.query(`
            SELECT * FROM users
            WHERE nome = $1;
        `,
        [name]);

        if (result.rows.length === 0) 
            return res.status(404).json({ message: "Usuário não encontrado." });

        return res.status(200).json({
            message: "Usuário encontrado com sucesso.",
            User: result.rows[0]
        });

    } catch (err) {
        return res.status(500).json({ Erro: err.message });
    }
};
const createUser= async (req,res)=>
{
    try{
        const {nome,idade,email} = req.body;
    const result = await pool.query(`
        INSERT INTO users (nome,idade,email)
        values ($1,$2,$3)
        RETURNING id, nome, idade, email;`,
    [nome,idade,email]);    
    res.status(201).json(result.rows[0]);
    }catch(err)
    {
        res.status(500).json({erro: err.message});    
    }
};

    module.exports={
    getById,
    getByName,
    createUser
};