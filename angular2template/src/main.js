(function(app){
  document.addEventListener( 'DOMContentLoaded', function(){
    // to launch the application
    // the function platformBrowserDynamic.bootstrapModule();
    //the root module "app.AppModule"
    ng.platformBrowserDynamic
      .platformBrowserDynamic()
      .bootstrapModule(app.AppModule);
  });
})(window.app || (window.app = {}));
