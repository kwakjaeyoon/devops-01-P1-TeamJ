'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    
    //전체 제품 조회
    const productFind = 
    [
       { 
           id : "a1b2c3d4e5",
           category_id : "b1c2d3e4f5",
           prod_name : "반찬",
           price : "2000",
           remain : 0,     //0일 경우 매진으로 표시
           image : "{image url}"
       },
       { 
           id : "a1b2c3d4e6",
           category_id : "b1c2d3e4f7",
           prod_name : "반찬2",
           price : "2000",
           remain : 0 ,    //0일 경우 매진으로 표시
           image : "{image url}"
       }
    ]

    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(productFind)
  })
}
