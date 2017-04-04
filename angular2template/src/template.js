angular.module('template', ['../app/template.html']);

angular.module("../app/template.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../app/template.html",
    "<h1> hi here is {{user}} </h1>\n" +
    "<button (click)=\"popup($event)\">click to run something!</button>\n" +
    "");
}]);
