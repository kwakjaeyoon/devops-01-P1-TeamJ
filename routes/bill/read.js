'use strict'

const {readBill} = require('../../model')

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply,err) {
    try{
      const result = await readBill(this.mongo,request.headers.userid)
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