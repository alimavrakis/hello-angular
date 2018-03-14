'use strict';

export default function exchangeRatesService($http) {

  function getRates(rates) {
    return $http.get('https://api.fixer.io/latest?base=USD&symbols=' + rates.join(','));
  }

  return {
    getRates: getRates
  };

};
