'use strict'

module.exports = async function (fastify, opts) {
  fastify.put('/:id', async function (request, reply) {
    
    //장바구니 수량 변경
    const cart = [
        { 
            id : "1a2b3c4d5e",
            user_id : "a1b2c3d4f5",
            product_id : "ffdjflk232",
            price : "2000",
            quantity : 2,    //0일 경우 매진으로 표시
            iconfirm : false
        }
    ]
    reply
    .code(201)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(cart)

  })
}