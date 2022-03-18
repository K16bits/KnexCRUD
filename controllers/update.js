const knexDB = require('../database/database')

module.exports = {
    async update(req,res){
        const {id,name} = req.body;

        const info = await knexDB("users").select("name").where('id','=',id).first()
     
        if(!info){
            return res.status(400).json({status:"usuario inexistente"})
        }

        try {
            await knexDB("users").where('id','=',id).update({
                name:name
            })
            return res.status(200).json({status:"Nome de usuário atualizado"})
        }catch(error){
            res.status(400).json({"falha":error})
        }
    
    }
}