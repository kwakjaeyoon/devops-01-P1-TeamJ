'use strict'

const {readCart} = require('../../model')

module.exports = async function (fastify, opts) {

  fastify.get('/', async function (request, reply,err) {
  try{
    const result = await readCart(this.mongo,request.headers.userid)
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