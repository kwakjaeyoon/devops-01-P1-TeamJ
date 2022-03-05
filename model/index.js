const { ObjectId } = require('fastify-mongodb')

module.exports = {
  readCart: async (mongo) => {
    const collection = mongo.db.collection('cart')
    const result = await collection.find({}).toArray()
    return result
  },
  updateCart: async (mongo, id, body) => {
    const collection = mongo.db.collection(process.env.COLLECTION_NAME)

    const result = await collection.findOneAndUpdate({
      _id: ObjectId(id)
    }, {
      $set: body
    })
    return result
  }
}