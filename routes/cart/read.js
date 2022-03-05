'use strict'

const {readCart} = require('../../model')

module.exports = async function (fastify, opts) {

  fastify.get('/', async function (request, reply) {
      const result = await readCart(this.mongo)
      reply.send(result)
 })
}