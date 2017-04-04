(function() {

    var appControlllerUsemin = angular.module("usemin", ['template']);
    // appControlllerUsemin.run(['$templateCache', function($templateCache){
    //   //$templateCache.put("template",);
    // }] );
    appControlllerUsemin.controller("useminCtrl",['$scope','$templateCache', function($scope,$templateCache) {
        $scope.name = "usemin";
        alert($templateCache.get("../template.html"));
    }]);

})();
