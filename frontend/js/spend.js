var spendApp = angular.module('spendApp', ['ngMaterial']);

spendApp.controller('MainCtrl', ['SpendService', function(spendService) {
    var self = this;

    self.spends = [];

    self.spends = spendService.getSpends;

}]);

spendApp.factory('SpendService', [function() {
    var spends = [
        {
            "id": 123,
            "userId": 123,
            "boughtTo": "Victor Novy",
            "productName": "Book",
            "pricy": 49.99,
            "acquiredIn": "01/07/2016",
            "expirationDay": "17/07/2016",
            "description": "test"
        },
        {
            "id": 1234,
            "userId": 1234,
            "boughtTo": "Victor Novy",
            "productName": "Phone",
            "pricy": 9.99,
            "acquiredIn": "01/07/2016",
            "expirationDay": "17/07/2016",
            "description": "Phone test"
        }
    ];

    return {
        getSpends: spends
    }
}]);