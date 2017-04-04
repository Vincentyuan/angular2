angular.module('template', ['../template.html']);

angular.module("../template.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../template.html",
    "<h1> hi here is {{user}} </h1>\n" +
    "<button (click)=\"popup($event)\">click to run something!</button>\n" +
    "");
}]);
