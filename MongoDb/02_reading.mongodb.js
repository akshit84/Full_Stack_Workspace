use("ecommerce");

// db.products.find({"name": 'Wireless Mouse'});

// db.products.find({ category: "Electronics" })

// db.products.find({ price: {$gt: 1000}})  //gt -> greater than 1000

// db.products.find({ price: {$gte: 1000, $lte: 50000}})

// db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })

// db.products.find().sort({price: -1}).limit(2)

// db.products.updateOne(
//   { "name": "Wireless Mouse"},
//   { $set: {price: 899}}
// )
// db.products.updateMany(
// { category: "Electronics" },
// { $inc: { stock: 10 } }
// )
// db.products.updateOne(
//   { name: "Wireless Mouse" }, { $push: { tags: "new" } });

db.products.find()
