var debug = require('debug')('spend:controller');
    Promise = require('bluebird');

var handleNotFound = function(data) {
    if (data)
        return data;

    var err = new Error('Not Found');
    err.status = 404;
    throw err;
}

function SpendController(spendModel) {
    this.model = Promise.promisifyAll(spendModel);
};

SpendController.prototype.getAll = function(request, response, next) {
    this.model.findAsync({})
        .then(function(data) {
            response.json(data);
        })
        .catch(next);
};

SpendController.prototype.getById = function(request, response, next) {
    var _id = request.params._id;
    this.model.findOneAsync(_id)
        .then(handleNotFound)
        .then(function(data) {
            response.json(data);
        })
        .catch(next);
};

SpendController.prototype.create = function(request, response, next) {
    var body = request.body;
    this.model.createAsync(body)
        .then(function(data) {
            response.json(data);
        })
        .catch(next);
};

SpendController.prototype.update = function(request, response, next) {
    var _id = request.params._id,
        body = request.body;
    this.model.updateAsync(_id, body)
        .then(function(data) {
            response.json(data);
        })
        .catch(next);
};

SpendController.prototype.remove = function(request, response, next) {
    var _id = request.params._id;
    this.model.removeAsync(_id)
        .then(handleNotFound)
        .then(function(data) {
            response.json(data);
        })
        .catch(next);
};

module.exports = function(spendModel) {
    return new SpendController(spendModel);
}