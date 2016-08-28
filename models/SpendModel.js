function SpendModel(mongo) {
    this.mongo = mongo;
    this.spendCollection = this.mongo.collection('spends');
};

SpendModel.prototype.find = function(query, callback) {
    this.spendCollection.find(query, callback);
};

SpendModel.prototype.findOne = function(_id, callback) {
    var query = {_id: this.mongo.ObjectId(_id)};
    this.spendCollection.findOne(query, callback)
};

SpendModel.prototype.create = function(data, callback) {
    this.spendCollection.insert(data, callback);
};

SpendModel.prototype.update = function(_id, data, callback) {
    var query = {_id: this.mongo.ObjectId(_id)};
    this.spendCollection.update(query, data, callback);
};

SpendModel.prototype.remove = function(_id, callback) {
    var query = {_id: this.mongo.ObjectId(_id)};
    this.spendCollection.remove(query, callback);
};

module.exports = function(mongo) {
    return new SpendModel(mongo);
};