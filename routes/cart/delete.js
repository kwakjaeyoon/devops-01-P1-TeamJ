'use strict'

const{deleteCart} = require('../../model')

module.exports = async function (fastify, opts) {
  fastify.delete('/:id', async function (request, reply,err) {
    
    const result = await deleteCart(this.mongo, request.params.id);
    try{
      reply
      .code(204)
      .header('Content-Type', 'application/json')
      .send({value: result.value, ok:result.ok})
    }catch(err){
      reply
      .code(404)
      .header('Content-Type', 'application/json')
      .send({error: "Not Found"})
    }
  })
}