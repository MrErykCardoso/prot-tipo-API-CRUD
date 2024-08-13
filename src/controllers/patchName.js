import {pool} from '../database/database.js'

export default {

    /**
     * 
     * @param {import("express").request} req
     * @param {import("express").response} res
     */

    patchName: async function (req, res) {

        try {

            const body = req.body

            if(!body || !body.nome || !body.id){
                return res.json('400 - Bad request')
            }

            const dbCheck = await pool.query('SELECT * FROM teste WHERE id_teste = $1', [body.id])

            if(dbCheck.rows.length > 0){

                const dbRes = await pool.query('UPDATE teste SET name_teste = $1 WHERE id_teste = $2', [body.nome, body.id])
                console.log(dbRes)

                return res.json('200 - Sucess, up to date!')

            } else {

                return res.json('404 - Not Found!')

            }

        } catch (error) {
            console.log(error)
            return res.json(error)
        }

    }

}