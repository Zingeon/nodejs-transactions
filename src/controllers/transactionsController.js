const transactions = require('../models/transactions')
const account = require('../models/account')

const TRANSACTION_OPERATIONS = {
    ADD: 'add',
    SUBTRACT: 'subtract'
}

exports.getHistory = async (req, res, next) => {
    const result = transactions.getHistory()
    
    if (!result) {
        res.status(500).json({
            error: 'Something went wrong'
        })
        next();
    }

    res.status(200).json(result);
}

exports.add = async (req, res, next) => {
    const data = req.body;
    if (!data.value || !data.operation) {
        res.status(400).json({
            error: 'Required field(s) is(are) missing'
        })
        next();
    }

    const operation = data.operation;
    const inputValue = parseInt(data.value);
    const currentBalance = account.getBalance();

    let newBalance = 0;
    if (operation == TRANSACTION_OPERATIONS.ADD) {
        newBalance = currentBalance + inputValue;
    } else if(operation == TRANSACTION_OPERATIONS.SUBTRACT) {
        newBalance = currentBalance - inputValue;
    }

    if (newBalance < 0) {
        res.status(400).json({
            error: 'Wrong balance value'
        })
        next();
    }

    account.changeBalance(newBalance);

    const result = transactions.add({ value: inputValue })
    transactions.addHistory(result, operation);

    if (!result) {
        res.status(500).json({
            error: 'Something went wrong'
        })
        next();
    }

    res.status(201).json(result)
}

exports.get = async (req, res, next) => {
    const { id } = req.params;
    const result = transactions.get(id)
    if (!result) {
        res.status(500).json({
            error: 'Something went wrong'
        })
        next();
    }
    res.status(200).json(result);
}
