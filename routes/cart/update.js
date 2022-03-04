'use strict'

module.exports = async function (fastify, opts) {
    fastify.put('/:product_id', async function (request, reply) {
        const productFind=[
            {
                id : "1a2b3c4d5e",
                user_id : "a1b2c3d4f5",
                product_id : "ffdjflk232",
                quantity : 2,
                confirm : false
            }
           ] 
     
           reply 
             .code(200)
             .header('contentType','application/json')
             .send(productFind);
     })
}



 