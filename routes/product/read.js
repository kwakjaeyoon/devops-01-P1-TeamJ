const {readProduct} = require('../../model')

module.exports = async function (fastify, opts) {

  fastify.get('/', async function (request, reply) {
      const result = await readProduct(this.mongo)
      reply.send(result)
 })
}