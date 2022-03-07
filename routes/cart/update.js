'use strict'

const{updateCart} = require('../../model')

module.exports = async function (fastify, opts) {
    fastify.put('/:id', async function (request, reply,err) {
    try{
        const result = await updateCart(this.mongo,request.params.id,request.body)
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



 