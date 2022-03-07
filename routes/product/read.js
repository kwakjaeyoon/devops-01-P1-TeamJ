'use strict'
const {readProduct,readProductOne} = require('../../model')

module.exports = async function (fastify, opts) {

  fastify.get('/', async function (request, reply) {
      const result = await readProduct(this.mongo)
      reply.send(result)
 })

  fastify.get('/:id', async function(request,reply,err){
    try{
    const result = await readProductOne(this.mongo, request.params.id)
      reply
      .code(200)
      .header('Content-Type', 'application/json')
      .send(result)
    }catch(err){
      reply.send(err)
    }
  })
}