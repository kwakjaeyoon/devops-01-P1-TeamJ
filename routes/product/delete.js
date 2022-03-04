'use strict'

module.exports = async function (fastify, opts) {
  fastify.delete('/:id', async function (request, reply) {
    
    //장바구니에서 삭제
    const productDelete = 
    [
       { 
        id : "1a2b3c4d5e",
        user_id : "a1b2c3d4f5",
        product_id : "ffdjflk232",
        quantity : 2,
        confirm : Boolean
       }
    ]

    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(productDelete)
  })
}