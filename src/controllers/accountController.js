const account = require('../models/account')

exports.getBalance = async (req, res, next) => {
    account.getBalance()
    res.json({test: 4})
}
