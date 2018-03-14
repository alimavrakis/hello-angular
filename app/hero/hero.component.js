'use strict';

const heroCtrl = function($http, exchangeRatesService) {
  this.loading = true;
  this.usdEur = 'N/A';
  this.usdCny = 'N/A';


  exchangeRatesService.getRates(['EUR', 'CNY']).then((resp) => {
    this.loading = false;
    this.usdEur = resp.data.rates.EUR;
    this.usdCny = resp.data.rates.CNY;
  });
};

// only really needed for projects with minifaction. Better yet...use ng-annotate instead
heroCtrl.$inject = ['$http', 'exchangeRatesService'];

module.exports = {
  template: require('./hero.tpl.html'),
  controller: heroCtrl,
  bindings: {
    customText: '@'
  }
};
