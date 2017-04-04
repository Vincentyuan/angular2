(function(app){
  app.AppComponent =
    ng.core.Component({
      selector:'my-app',
      //moduleId:module.id,
      templateUrl:'app/template.html'
    })
    .Class({
      //implement the component
      //more like the scope the controllor in angular1
      //user:"ping",
      constructor:function (){
        this.user="ping";
      },
      popup:function(event){
        alert("welcome!");
      }
    });
})( window.app ||(window.app = {}));

(function(app){
  app.AppModule =
  ng.core.NgModule({
    imports:[ ng.platformBrowser.BrowserModule ],
    declarations: [app.AppComponent ],
    bootstrap : [ app.AppComponent]
  }).Class({
    constructor: function(){}
  });
})(window.app||(window.app = {}));

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
