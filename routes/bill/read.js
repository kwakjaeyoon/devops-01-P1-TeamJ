'use strict'

const {readBill} = require('../../model')

module.exports = async function (fastify, opts) {

  fastify.get('/', async function (request, reply) {
      const result = await readBill(this.mongo,request.headers.userid)
      reply.send(result)
 })
}