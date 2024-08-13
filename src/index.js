import express from 'express'
import createName from './controllers/createName.js'
import getName from './controllers/getName.js'
import patchName from './controllers/patchName.js'
import deleteName from './controllers/deleteName.js'
import 'dotenv/config'

// Configurações ------------------------------------------------------------------------

const app = express()

const port = 3001

app.use(express.json())

// Rotas --------------------------------------------------------------------------------

app.get('/get', getName.getName)

app.post('/post', createName.createName)

app.patch('/patch', patchName.patchName)

app.delete('/delete', deleteName.deleteName)

// confirmação de inicialização ---------------------------------------------------------

app.listen(port, ()=>{
    console.log('Servidor ativo...')
})

export default app