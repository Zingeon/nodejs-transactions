const transactions = require('../models/transactions')

exports.getHistory = async (req, res, next) => {
    transactions.getHistory()
    res.json({test: 1})
}

exports.add = async (req, res, next) => {
    transactions.add()
    res.json({test: 2})
}

exports.get = async (req, res, next) => {
    res.json({test: 3})
}
