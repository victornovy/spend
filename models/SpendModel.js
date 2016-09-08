var debug = require('debug')('spend:model');

function SpendDAO(model) {
    this.model = model
};

SpendDAO.prototype.find = function(query, callback) {
    this.model.find(query).exec(callback);
};

SpendDAO.prototype.findOne = function(id, callback) {
    var query = {_id: id};
    this.model.findOne(query).exec(callback);
};

SpendDAO.prototype.create = function(data, callback) {
    var model = new this.model(data);
    model.save(function(err, result){
        callback(err, result);
    });
};

SpendDAO.prototype.update = function(id, data, callback) {
    var query = {_id: id};
    this.model.update(query, data).exec(function(err, result) {
        callback(err, result);
    });
};

SpendDAO.prototype.remove = function(id, callback) {
    var query = {_id: id};
    this.model.remove(query).exec(function(err, result) {
        callback(err, result);
    });
};

module.exports = function(mongoose) {
    var validateTypeOfProduct = function(type) {
        return type === 'Credit' || type === 'Debit';
    }

    var spend = mongoose.model('spends', {
        userId: {
            type: Number,
            required: true,
            default: 1
        },
        boughtTo: {
            type: String,
            required: false
        },
        productName: {
            type: String,
            required: true
        },
        pricy: {
            type: Number,
            required: true
        },
        acquiredIn: {
            type: Date,
            required: true
        },
        expirationDay: {
            type: Date,
            required: false
        },
        typeOf: {
            type: String,
            required: true,
            validate: [validateTypeOfProduct, 'Invalid type of spend.']
        },
        description: {
            type: String,
            required: false
        }
    });
    return new SpendDAO(spend);
};