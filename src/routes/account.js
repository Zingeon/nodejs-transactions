const router = require('express').Router();
const controller = require('../controllers/accountController');

router.get('/balance', controller.getBalance);


module.exports = router;