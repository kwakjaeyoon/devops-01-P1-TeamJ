'use strict'

const{deleteCart} = require('../../model')

module.exports = async function (fastify, opts) {
  fastify.delete('/:id', async function (request, reply) {
    
    const result = await deleteCart(this.mongo, request.params.id);
      reply
      .code(204)
      .header('Content-Type', 'application/json')
      .send({value: result.value, ok:result.ok})
  })
}