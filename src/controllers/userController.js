
const getById = (req,res)=>
{
    const idG = req.params.id;
    return res.json({
        message:"Usuário buscado pelo ID",
        idRecebido:idG
    });
    
};

const getByName = (req,res)=>
{
    const nameG = req.query.name;
    return res.json({
        message:"Usuário buscado por meio do nome",
        nomeReceviso:nameG
    });

};

    module.exports={
    getById,
    getByName,
};