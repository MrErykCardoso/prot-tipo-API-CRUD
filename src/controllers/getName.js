import {pool} from '../database/database.js'


export default {

    /**
     * 
     * @param {import("express").request} req 
     * @param {import("express").response} res 
     * @returns 
     */

    getName: async function (req, res){
        try {
            
            const dbRes = await pool.query('SELECT * FROM teste')
            console.log(dbRes)
            const list = dbRes.rows.map(row => row)
            
            return res.json({list})

        } catch (error) {
            console.log(error)
            return res.json(error)
        }
    }
}