'use strict';

module.exports = function(/* environment, appConfig */) {
  var ENV = {
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
        'ember-htmlbars': true
      }
    }
  };

  return ENV;
};
