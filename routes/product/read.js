const { default: fastify } = require('fastify')
const {readProduct} = require('../../model')

module.exports = async function (fastify, opts) {

  fastify.get('/', async function (request, reply) {
      const result = await readProduct(this.mongo)
      reply.send(result)
 })

  fastify.get('/:id', async function(request,reply){
    const result = await readOne(this.mongo, request.params.id)
      reply
      .code(200)
      .header('Content-Type', 'application/json')
      .send(result)
  })
}