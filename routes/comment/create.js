'use strict'

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
    const commentReply=[{
        status: 201,
	    message: "CREATED"
    }] 
 
       reply 
         .code(201)
         .header('contentType','application/json')
         .send(commentReply)
 })
}




 