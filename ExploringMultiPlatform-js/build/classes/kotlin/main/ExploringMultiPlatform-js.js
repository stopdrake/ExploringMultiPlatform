if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'ExploringMultiPlatform-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ExploringMultiPlatform-js'.");
}
this['ExploringMultiPlatform-js'] = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function commonSharedCode(platform) {
    return 'Common: Hi! ' + platform.greetingMethod + '(' + platform.name + ')';
  }
  function main(args) {
    println(commonSharedCode(getPlatform()));
  }
  function Platform() {
  }
  Object.defineProperty(Platform.prototype, 'greetingMethod', {
    get: function () {
      return 'Console.log';
    }
  });
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
  package$multiplat.commonSharedCode_m8xfss$ = commonSharedCode;
  package$multiplat.main_kand9s$ = main;
  package$multiplat.Platform = Platform;
  package$multiplat.getPlatform = getPlatform;
  main([]);
  Kotlin.defineModule('ExploringMultiPlatform-js', _);
  return _;
}(typeof this['ExploringMultiPlatform-js'] === 'undefined' ? {} : this['ExploringMultiPlatform-js'], kotlin);
