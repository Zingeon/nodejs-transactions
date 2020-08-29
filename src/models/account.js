const db = require('./lowdb')

exports.getBalance = () => {
    return db.get('account')
        .value().value;
}

exports.changeBalance = (value) => {
    db.set('account.value', value)
    .write()
}


