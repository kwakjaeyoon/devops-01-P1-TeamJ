'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const productFind=[
        {
            id: "a1b2c3d4f5",
            user_id : "dsdf9sdf09f0",
            product_id : "dhfk2e23jj33",
            quantity : 2,
            confirm : true
        },
        {
            id: "a1b2c3d4f5",
            user_id : "dsdf9sdf09f0",
            product_id : "dhfk2e23jj33",
            quantity : 1,
            confirm : false
        }
       ] 
 
       reply 
         .code(200)
         .header('contentType','application/json')
         .send(productFind);
 })
}