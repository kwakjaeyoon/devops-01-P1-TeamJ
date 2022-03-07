const { ObjectId } = require('fastify-mongodb')

module.exports = {
  //Cart와 Bill 관련해서 userId 부분 수정필요
  readBill: async (mongo,id) => {
    const collection = mongo.db.collection('cart')
    const result = await collection.find({
      user_id: id,
      confirm : true
    }).toArray()
    return result
  }, 
  readCart: async (mongo,id) => {
    const collection = mongo.db.collection('cart')
    const result = await collection.find({
      user_id: id,
      confirm : false
    }).toArray()
    return result
  },  
  //postman 통해 req.body에 userId와 productId 같이 삽입하는 과정만 진행한 상태
  createCart: async (mongo, body) => {
    const collection = mongo.db.collection('cart')
    const result = await collection.insertOne(body)
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
  deleteCart: async (mongo, id) => {
    const collection = mongo.db.collection('cart')

    const result = await collection.findOneAndDelete({
      _id: ObjectId(id)
    })
    return result
  },
  // 각 페이지 별로 보여져야 할 상품의 개수도 구현해야함
  readProduct: async (mongo) => {
    const collection = mongo.db.collection('product')
    const result = await collection.find({}).toArray()
    return result
  },
  readProductOne: async (mongo, id) => {
    const collection = mongo.db.collection('product')
    const result = await collection.find({
      _id: ObjectId(id)
    })
    return result
  },
  updateProduct: async (mongo, id, body) => {
    const collection = mongo.db.collection('product')
    const result = await collection.findOneAndUpdate({
      _id: ObjectId(id)
    }, {
      $set: body
    })
    return result
  },
  deleteProduct: async (mongo, id) => {
    const collection = mongo.db.collection('product')

    const result = await collection.findOneAndDelete({
      _id: ObjectId(id)
    })
    return result
  },
  createComment: async (mongo, body) => {
    const collection = mongo.db.collection('comment')
    const result = await collection.insertOne(body)
    return result
  },
  updateComment: async (mongo, id, body) => {
    const collection = mongo.db.collection('comment')

    const result = await collection.findOneAndUpdate({
      _id: ObjectId(id)
    }, {
      $set: body
    })
    return result
  },
  deleteComment: async (mongo, id) => {
    const collection = mongo.db.collection('comment')

    const result = await collection.findOneAndDelete({
      _id: ObjectId(id)
    })
    return result
  }
}