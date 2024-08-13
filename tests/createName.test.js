import supertest from 'supertest'
import app from '../src/index'

describe("POST /post createName", ()=>{

    it('Erro 400: Não deve permitir uma entrada de nome vazia.', async ()=>{

        const body = {nome:''}

        await supertest(app)
        .post('/post')
        .send(body)
        .expect((res)=>{

            const {status,body} = res

            if(status != 400){
                throw new Error(`Status esperado 400, rescebido ${status} - resposta do body ${JSON.stringify(body)}`)
            }

            if(body.mensagem != '400 - Bad Request.'){
                throw new Error(`Mensagem esperada "400 - Bad Request.", recebido ${body.mensagem}`)
            }

        })

    })

    it('Pass 200: A rota deve inserir os dados com sucesso.', async ()=>{

        const body = {nome: "Marcelo"}

        await supertest(app)
        .post('/post')
        .send(body)
        .expect((res)=>{

            const {status,body} = res
            
            if(status != 200){
                throw new Error(`Status esperado 200, recebido ${status} - resposta do body ${JSON.stringify(body)}`)
            }
            if(body.mensagem != '200 - Sucess!'){
                throw new Error(`Mensagem esperada "200 - Sucess!", recebido ${body.mensagem}`)
            }

        })
    })

})
