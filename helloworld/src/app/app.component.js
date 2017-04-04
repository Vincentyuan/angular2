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
