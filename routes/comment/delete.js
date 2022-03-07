'use strict'

const{deleteComment} = require('../../model')

module.exports = async function (fastify, opts) {
  fastify.delete('/:id', async function (request, reply,err) {
  try{
    const result = await deleteComment(this.mongo, request.params.id);
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