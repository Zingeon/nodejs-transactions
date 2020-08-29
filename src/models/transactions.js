const db = require('./lowdb')
const { iterate } = require('jsoncrement');

exports.getHistory = () => {
    return db.get('transactionsHistory')
        .value()
}

exports.addHistory = (data, operation) => {
    return db.get('transactionsHistory')
        .push({ ...data, operation })
        .write()
}

exports.add = (data) => {
    const allRecords = db.get('transactions')
        .value();

    const newRecord = {
        value: data.value
    }
    const checkForId = iterate(allRecords, 'id', newRecord);

    const result = db.get('transactions')
        .push({ id: checkForId.id, ...newRecord })
        .write()
    if (result) {
        return newRecord;
    }
    return false;
}


exports.get = (id) => {
    return db.get('transactions')
        .find({ id: parseInt(id) })
        .value()
}



