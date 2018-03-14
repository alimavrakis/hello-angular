import angular from 'angular';
import hero from './hero/hero.component.js';
import ExchangeRatesService from './resources/exchange-rate.service.js';

angular.module('helloAngular', [])
  .component('hero', hero)
  .service('exchangeRatesService', ExchangeRatesService);

