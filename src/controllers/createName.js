import {pool} from '../database/database.js'

export default {

    /**
     * @param {import('express').request} req
     * @param {import('express').response} res
     */

    createName: async function (req, res){
        try {
            const body = req.body

            if(!body || !body.nome){
                return res.status(400).json({mensagem: '400 - Bad Request.', body})
            }
            
            const dbRes = await pool.query('INSERT INTO teste ("name_teste") VALUES ($1) RETURNING *', [body.nome])
            const result = dbRes.rows[0]

            if(result){
                
                return res.status(200).json({mensagem:'200 - Sucess!', result})

            } else {
                
                return res.status(500).json({mensagem:'500 - Internal server error', result}) 

            }

        } catch (error) {
            return res.status(500).json(error)
        }
    }
}