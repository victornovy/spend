var express = require('express'),
    router = express.Router(),
    spendController = require('../controllers/SpendController');

router.get('/', spendController.getAll);

router.get('/:_id', spendController.getById);

router.post('/', spendController.create);

router.put('/:_id', spendController.update);

router.delete('/:_id', spendController.remove);

module.exports = router;