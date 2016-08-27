function SpendController() {};

SpendController.prototype.getAll = function(request, response, next) {
    response.send('get all spends.');
};

SpendController.prototype.getById = function(request, response, next) {
    response.send('get a specific spend by id.');
};

SpendController.prototype.create = function(request, response, next) {
    response.send('create a spend.');
};

SpendController.prototype.update = function(request, response, next) {
    response.send('update a spend.');
};

SpendController.prototype.remove = function(request, response, next) {
    response.send('remove a spend.');
};

module.exports = new SpendController();