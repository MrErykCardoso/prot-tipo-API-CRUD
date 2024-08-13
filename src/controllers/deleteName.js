import {pool} from '../database/database.js'

export default {

    /**
     * 
     * @param {import("express").request} req
     * @param {import("express").response} res
     */


    deleteName: async function (req, res) {

        try {
            const body = req.body
            
            if(!body || !body.id){
                return res.json('400 - Bad resquest!')
            }
            
            const dbCheck = await pool.query('SELECT * FROM teste WHERE id_teste = $1', [body.id])

            if(dbCheck.rows.length > 0){
                const dbRes = await pool.query('DELETE FROM teste WHERE id_teste = $1', [body.id])
                console.log(dbRes)

                return res.json('200 - Sucess, deleted!')
            } else {
                return res.json('404 - Not found!')
            }


        } catch (error) {
            console.log(error)
            return res.json(error)
        }
    }
}