var express = require('express'),
    router = express.Router(),
    mongoose = require('../db/mongoose'),
    spendModel = require('../models/SpendModel')(mongoose),
    spendController = require('../controllers/SpendController')(spendModel);

router.get('/', spendController.getAll.bind(spendController));

router.get('/:_id', spendController.getById.bind(spendController));

router.post('/', spendController.create.bind(spendController));

router.put('/:_id', spendController.update.bind(spendController));

router.delete('/:_id', spendController.remove.bind(spendController));

module.exports = router;