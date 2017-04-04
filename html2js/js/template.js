angular.module('templates-main', ['../html/template.html']);

angular.module("../html/template.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../html/template.html",
    "<<h1> hi here is {{user}} </h1>\n" +
    "<button (click)=\"popup($event)\">click to run something!</button>\n" +
    "");
}]);
