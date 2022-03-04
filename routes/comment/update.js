'use strict'

module.exports = async function (fastify, opts) {
    fastify.put('/:comment_id', async function (request, reply) {
        const updateComment=[
            {
                id :"asdf223",
                user_id :"2k34lkj32lj",
                product_id : "21h3kl1h3",
                comment :"댓글!",
                star : 4.0
            }
           ] 
     
           reply 
             .code(200)
             .header('contentType','application/json')
             .send(updateComment);
     })
}



 