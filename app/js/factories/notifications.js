'use strict';

angular.module('doggerApp.factories')
  .service('notifications', ['growl', function(growl) {

    this.success = function(text) {
      if (text) {
        growl.addSuccessMessage(text, { ttl: 5000 });
      }
    };

    this.warning = function(text) {
      if (text) {
        growl.addWarningMessage(text, { ttl: 5000 });
      }
    };

    this.info = function(text) {
      if (text) {
        growl.addInfoMessage(text, { ttl: 5000 });
      }
    };

    this.error = function(text) {
      var txt = text || 'Internal Error.';

      growl.addErrorMessage(txt, { ttl: -1 });
    };

  }]);
