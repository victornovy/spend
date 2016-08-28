var debug = require('debug')('spend:controller');

function SpendController(spendModel) {
    this.model = spendModel;
};

SpendController.prototype.getAll = function(request, response, next) {
    this.model.find({}, function(err, data) {
        if (err)
            return next(err);
        reponse.json(data);
    });
};

SpendController.prototype.getById = function(request, response, next) {
    var _id = request.params._id;
    this.model.findOne(_id, function(err, data) {
        if (err)
            return next(err);
        response.json(data);
    });
};

SpendController.prototype.create = function(request, response, next) {
    var body = request.body;
    this.model.create(body, function(err, data) {
        if (err)
            return next(err);
        response.json(data);
    });
};

SpendController.prototype.update = function(request, response, next) {
    var _id = request.params._id,
        body = request.body;
    this.model.findOne(_id, body, function(err, data) {
        if (err)
            return next(err);
        response.json(data);
    });
};

SpendController.prototype.remove = function(request, response, next) {
    var _id = request.params._id;
    this.model.remove(_id, function(err, data) {
        if (err)
            return next(err);
        response.json(data);
    });
};

module.exports = function(spendModel) {
    return new SpendController(spendModel);
}