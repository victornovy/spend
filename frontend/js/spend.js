var momentBr = {
    months : 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
    monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
    weekdays : 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
    weekdaysShort : 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
    weekdaysMin : 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        L : 'DD/MM/YYYY',
        LL : 'D [de] MMMM [de] YYYY',
        LLL : 'D [de] MMMM [de] YYYY [às] LT',
        LLLL : 'dddd, D [de] MMMM [de] YYYY [às] LT'
    },
    calendar : {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: function () {
            return (this.day() === 0 || this.day() === 6) ?
                '[Último] dddd [às] LT' : // Saturday + Sunday
                '[Última] dddd [às] LT'; // Monday - Friday
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'em %s',
        past : '%s atrás',
        s : 'segundos',
        m : 'um minuto',
        mm : '%d minutos',
        h : 'uma hora',
        hh : '%d horas',
        d : 'um dia',
        dd : '%d dias',
        M : 'um mês',
        MM : '%d meses',
        y : 'um ano',
        yy : '%d anos'
    },
    ordinal : '%dº'
};
//moment.defineLocale('pt-br', momentBr);

var spendApp = angular.module('spendApp', ['ngMaterial']);

spendApp.controller('MainCtrl', ['$scope', 'SpendService', '$mdDialog', function($scope, spendService, $mdDialog) {

    var self = this;

    $scope.spends = spendService.getSpends;

    var openPopup = function(event) {
        $mdDialog.show({
            targetEvent: event,
            clickOutsideToClose: true,
            preserveScope: true,
            templateUrl: 'templ/spendsForm.html',
            controllerAs: "ctrl",
            bindToController: true,
            controller: function DialogController($scope, $mdDialog, spendService) {
                $scope.types = ['Credit', 'Debit'];
                $scope.spend = this.scopeParent.currentSpend;

                this.saveSpend = function() {
                    var currentSpend = $scope.spend;
                    spendService.saveSpend(currentSpend);
                    $mdDialog.hide();
                };
            },
            locals: {
                scopeParent: $scope,
                spendService: spendService
            }
        });
    };

    self.openPopupNew = function(event) {
        $scope.currentSpend = {};
        openPopup(event);
    };

    self.editRegister = function(event, index) {
        $scope.currentSpend = $scope.spends[index];
        openPopup(event);
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
            "acquiredIn": new Date("07-01-2016"),
            "expirationDay": new Date("07-17-2016"),
            "typeOf": "Credit",
            "description": "test test test test test"
        },
        {
            "id": 1234,
            "userId": 1234,
            "boughtTo": "Victor Novy",
            "productName": "Phone",
            "pricy": 9.99,
            "acquiredIn": new Date("07-01-2016"),
            "expirationDay": new Date("07-17-2016"),
            "typeOf": "Debit",
            "description": "Phone test"
        },
        {
            "id": 12345,
            "userId": 12345,
            "boughtTo": "Victor Novy",
            "productName": "Colomn",
            "pricy": 60.00,
            "acquiredIn": new Date("07-06-2016"),
            "expirationDay": new Date("07-06-2016"),
            "typeOf": "Debit",
            "description": "Phone test"
        },
        {
            "id": 123456,
            "userId": 123456,
            "boughtTo": "Victor Novy",
            "productName": "Hair",
            "pricy": 15.00,
            "acquiredIn": new Date("07-10-2016"),
            "expirationDay": new Date("07-06-2016"),
            "typeOf": "Debit",
            "description": "Phone test"
        }
    ];

    var saveSpend = function(spend) {
        if ('id' in spend)
            return editSpend(spend);
        return addSpend(spend);
    };

    var addSpend = function(spend) {
        spend.id = Math.floor((Math.random() * 10000));
        spends.push(spend);
    };

    var editSpend = function(spend) {

    };

    return {
        getSpends: spends,
        saveSpend: saveSpend
    }
}]);