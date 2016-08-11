var spendApp = angular.module('spendApp', ['ngMaterial']);

spendApp.controller('MainCtrl', ['$scope', 'SpendService', '$mdDialog', function($scope, spendService, $mdDialog) {

    var self = this;

    $scope.spends = spendService.getSpends;

    self.openPopupNew = function(event) {
        $mdDialog.show({
            clickOutsideToClose: true,
            preserveScope: true,
            template: `<md-dialog>
                          <md-dialog-content>
                             Welcome to TutorialsPoint.com
                             <form>
                                <md-input-container>
                                    <label>Bought to</label>
                                    <input type="text"
                                           ng-model="">
                                    </input>
                                </md-input-container>
                                <md-input-container>
                                    <label>Pricy</label>
                                    <input type="text"
                                           ng-model="">
                                    </input>
                                </md-input-container>
                                <md-input-container>
                                    <label>Acquired in</label>
                                    <input type="text"
                                           ng-model="">
                                    </input>
                                </md-input-container>
                                <md-input-container>
                                    <label>Type</label>
                                    <input type="text"
                                           ng-model="">
                                    </input>
                                </md-input-container>
                                <md-input-container>
                                    <label>Expiration Day</label>
                                    <input type="text"
                                           ng-model="">
                                    </input>
                                </md-input-container>
                                <md-input-container>
                                    <label>Description</label>
                                    <input type="text"
                                           ng-model="">
                                    </input>
                                </md-input-container>
                             </form>
                          </md-dialog-content>
                      </md-dialog>`,
            controller: function DialogController($scope, $mdDialog) {
               debugger;
            }
        });
    };

    self.editRegister = function(index) {
        var register = $scope.spends[index];
        debugger;
    };

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
            "typeOf": "Credit",
            "description": "test test test test test"
        },
        {
            "id": 1234,
            "userId": 1234,
            "boughtTo": "Victor Novy",
            "productName": "Phone",
            "pricy": 9.99,
            "acquiredIn": "01/07/2016",
            "expirationDay": "17/07/2016",
            "typeOf": "Debit",
            "description": "Phone test"
        },
        {
            "id": 12345,
            "userId": 12345,
            "boughtTo": "Victor Novy",
            "productName": "Colomn",
            "pricy": 60.00,
            "acquiredIn": "06/07/2016",
            "expirationDay": "06/07/2016",
            "typeOf": "Debit",
            "description": "Phone test"
        },
        {
            "id": 123456,
            "userId": 123456,
            "boughtTo": "Victor Novy",
            "productName": "Hair",
            "pricy": 15.00,
            "acquiredIn": "10/07/2016",
            "expirationDay": "06/07/2016",
            "typeOf": "Debit",
            "description": "Phone test"
        }
    ];

    return {
        getSpends: spends
    }
}]);