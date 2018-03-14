import angular from 'angular';
import hero from './hero/hero.component.js';
import exchangeRatesService from './resources/exchange-rate.service.js';

angular.module('helloAngular', [])
  .component('hero', hero)
  .factory('exchangeRatesService', exchangeRatesService);

