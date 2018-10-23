if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'ExploringMultiPlatform-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ExploringMultiPlatform-js'.");
}
this['ExploringMultiPlatform-js'] = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function sendGreeting(platform, name) {
    return 'Common: Hi ' + name + ', Welcome to ' + platform.name;
  }
  function Platform() {
  }
  Object.defineProperty(Platform.prototype, 'name', {
    get: function () {
      return 'JS';
    }
  });
  Platform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Platform',
    interfaces: []
  };
  function getPlatform() {
    return new Platform();
  }
  var package$demo = _.demo || (_.demo = {});
  var package$multiplat = package$demo.multiplat || (package$demo.multiplat = {});
  package$multiplat.sendGreeting_w78vdi$ = sendGreeting;
  package$multiplat.Platform = Platform;
  package$multiplat.getPlatform = getPlatform;
  Kotlin.defineModule('ExploringMultiPlatform-js', _);
  return _;
}(typeof this['ExploringMultiPlatform-js'] === 'undefined' ? {} : this['ExploringMultiPlatform-js'], kotlin);
