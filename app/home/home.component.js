'use strict';

function homeCtrl() {
  console.log('we\'re home: ' + this.hero);
}

module.exports = {
  template: require('./home.tpl.html'),
  controller: homeCtrl,
  bindings: {
    hero: '='
  }
}

