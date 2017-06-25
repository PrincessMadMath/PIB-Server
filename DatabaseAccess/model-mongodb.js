const MongoClient = require('mongodb').MongoClient

let collection;

const uri = process.env.MONGO_URI
const username = process.env.MONGO_USER
const password = process.env.MONGO_PWD

function getDatabase() {
    return MongoClient
        .connect(uri)
        .then(db => {
            return db
                .authenticate(username, password)
                .then(res => {
                    return db;
                })
        })
}

function getCollection(collectionName) {
    return getDatabase().then(db => {
        const collection = db.collection(collectionName)
        return collection
    })
}

function getCompleteCollection(collectionName) {
    return getCollection(collectionName).then(collection => {
        return collection
            .find()
            .toArray()
            .then(result => {
                return result
            })
    })
}

function list(collectionName, limit, skipCount) {
    return getCollection(collectionName).then(collection => {
        return collection
            .find()
            .skip(skipCount)
            .limit(limit)
            .toArray()
            .then(result => {
                return result
            })
    })
}

function create(collectionName, data)
{
    return getCollection(collectionName).then(collection => {
        return collection.insert(data).then(result => {
            const item = result.ops
            return item
        })
    })
}

module.exports = {
    getCompleteCollection,
    list,
    create
}