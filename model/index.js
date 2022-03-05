const { ObjectId } = require('fastify-mongodb')

module.exports = {
  readCart: async (mongo) => {
    const collection = mongo.db.collection('cart')
    const result = await collection.find({}).toArray()
    return result
  },
  // 각 페이지 별로 보여져야 할 상품의 개수도 구현해야함
  readProduct: async (mongo) => {
    const collection = mongo.db.collection('product')
    const result = await collection.find({}).toArray()
    return result
  },
  updateCart: async (mongo, id, body) => {
    const collection = mongo.db.collection('cart')

    const result = await collection.findOneAndUpdate({
      _id: ObjectId(id)
    }, {
      $set: body
    })
    return result
 },



}