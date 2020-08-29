const router = require('express').Router();
const controller = require('../controllers/transactionsController');

router.get('/history', controller.getHistory);
router.get('/:id', controller.get);
router.post('/', controller.add);


module.exports = router;