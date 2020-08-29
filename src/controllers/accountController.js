const account = require('../models/account')

exports.getBalance = async (req, res, next) => {
    const result = account.getBalance()

    if (!result) {
        res.status(500).json({
            error: 'Something went wrong'
        })
        next();
    }

    res.status(200).json({currentBalance: result})
}
