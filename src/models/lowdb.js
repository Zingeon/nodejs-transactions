const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({
    transactions: [],
    account: {value: 0},
    transactionsHistory: []
})
    .write()

module.exports = db;