const knexDB = require('../database/database');

module.exports = {
    async deleteData(req,res){
        const {id} = req.body
        const info = await knexDB("users").select("id").where('id','=',id).first()

        if(!info){
            return res.status(400).json({status:"usuario inexistente"})
        }

        try {
            await knexDB("users").where('id','=',id).delete()
            return res.status(200).json({status:"usuario deletado com sucesso"})
        }catch(error){
            console.log("falha",error)
        }

    }
}