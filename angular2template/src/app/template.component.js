(function(app){
  app.TemplateComponent =
    ng.core.Component({
      //selector:'my-app',
      //moduleId:module.id,
      //templateUrl:'app/template.html'
    })
    .Class({
      //implement the component
      //more like the scope the controllor in angular1
      //user:"ping",
      constructor:function (){
        // here is the template
        this.name = "ping";
        this.template = "<h2>{{name}}</h2>";
      },
      getTemplate:function(){
          return this.template;
      }
    });
})( window.app ||(window.app = {}));
