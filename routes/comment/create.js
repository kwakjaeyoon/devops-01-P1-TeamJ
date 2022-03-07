'use strict'

const { createComment } = require('../../model')

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply,err) {
  try{
    const result = await createComment(this.mongo,request.body);
    reply
    .code(201)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(result)
  }catch(err){
    reply
    .code(404)
    .header('Content-Type', 'application/json')
    .send({error: "Not Found"})
  }
  })
}



 