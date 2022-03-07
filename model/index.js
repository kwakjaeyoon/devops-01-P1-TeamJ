const { ObjectId } = require('fastify-mongodb')

module.exports = {
  readBill: async (mongo,token) => {
    if(token==="aaaa") id="6221b2f420c7ac4aecff55cc"
    else if(token==="bbbb") id="6221b37d20c7ac4aecff55ce"
    else if(token==="cccc") id="6221b3b620c7ac4aecff55cf"
    const collection = mongo.db.collection('cart')
    const result = await collection.find({
      user_id: id,
      confirm : true
    }).toArray()
    return result
  }, 
  readCart: async (mongo,token) => {
    if(token==="aaaa") id="6221b2f420c7ac4aecff55cc"
    else if(token==="bbbb") id="6221b37d20c7ac4aecff55ce"
    else if(token==="cccc") id="6221b3b620c7ac4aecff55cf"
    const collection = mongo.db.collection('cart')
    const result = await collection.find({
      user_id: id,
      confirm : false
    }).toArray()
    return result
  },  
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
  readProduct: async (mongo,offset,count) => {
    let newOffset=parseInt(offset)
    let newCount=parseInt(count)
    const collection = mongo.db.collection('product')
    const result = await collection.find({}).skip(newOffset).limit(newCount).toArray()
    return result
  },
  readCategory: async (mongo,id,offset,count) => {
    let newOffset=parseInt(offset)
    let newCount=parseInt(count)
    const collection = mongo.db.collection('product')
    const result = await collection.find({
      category_id: id
    }).skip(newOffset).limit(newCount).toArray()
    return result
  },
  readProductOne: async (mongo, id) => {
    const collection = mongo.db.collection('product')
    const result = await collection.findOne({
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