'use strict'

module.exports = async function (fastify, opts) {
    fastify.delete('/:product_id', async function (request, reply) {
        const deleteComment=[
            {
                "status": 200,
	            "message": "OK"
            }
           ] 
     
           reply 
             .code(200)
             .header('contentType','application/json')
             .send(deleteComment);
     })
}