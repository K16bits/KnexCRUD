const knexDB = require('../database/database')

module.exports = {
    async read(req,res){
        try {
            const data = await knexDB("users").select('*')
            return res.status(200).json({data})
        }catch(error){
            res.status(400).json({"falha":error})
        }
    }
}