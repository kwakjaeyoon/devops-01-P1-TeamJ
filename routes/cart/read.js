'use strict'

const {readCart,findUser} = require('../../model')

module.exports = async function (fastify, opts) {

  fastify.get('/', async function (request, reply,err) {
  try{
    if(!request.headers.authorization) {throw reply.code(401).send({message:"인증정보가 입력되지 않았습니다."})}
      const token= await findUser(this.mongo,request.headers.authorization)
      const result = await readBill(this.mongo,token)
    reply
      .code(200)
      .header('Content-Type', 'application/json')
      .send(result)
    }catch(err){
      reply
      .code(404)
      .header('Content-Type', 'application/json')
      .send({error: "Not Found"})
    }
 })
}