const knexDB = require('../database/database');
const { makePeople } = require('../model/people');

module.exports = {
    async create(req,res){
        const {name,age,phone} = req.body;
        const data = makePeople(name,age,phone)
        const info = await knexDB("users").select("name").where('name','=',data.name).first()

        if(!info){
            try {
                await knexDB("users").insert(data)
                return res.status(200).json({status:"deu bom"})
            }catch(error){
                console.log("falha",error)
            }
        }
        
        return res.status(400).json({status:"usuario já cadastrado"})
    }
}