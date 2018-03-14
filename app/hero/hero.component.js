'use strict';

var heroCtrl = function($http, exchangeRatesService) {
  var vm = this;
  vm.loaded = false;
  vm.usdEur = 'N/A';
  vm.usdCny = 'N/A';


  exchangeRatesService.getRates(['EUR', 'CNY']).then(function(resp) {
    vm.loaded = true;
    vm.usdEur = resp.data.rates.EUR;
    vm.usdCny = resp.data.rates.CNY;
  });
};

heroCtrl.$inject = ['$http', 'exchangeRatesService'];

module.exports = {
  template: require('./hero.tpl.html'),
  controller: heroCtrl,
  bindings: {
    customText: '@'
  }
};

