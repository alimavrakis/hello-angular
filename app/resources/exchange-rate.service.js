'use strict';

export default class ExchangeRatesService {

  constructor($http) {
    this.$http = $http;
  }

  getRates(rates) {
    return this.$http.get('https://api.fixer.io/latest?base=USD&symbols=' + rates.join(','));
  }

};
