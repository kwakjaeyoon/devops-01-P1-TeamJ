'use strict'

const {updateCart} = require('../../model')

module.exports = async function (fastify, opts) {
    fastify.put('/:id', async function (request, reply) {
        const result = await updateCart(this.mongo,req.params.id,req.body)
        reply.send(result)
    })
}
