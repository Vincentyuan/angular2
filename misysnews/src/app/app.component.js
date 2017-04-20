"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var feed = (function () {
    function feed() {
    }
    return feed;
}());
exports.feed = feed;
var Category = (function () {
    function Category() {
    }
    return Category;
}());
exports.Category = Category;
var AppComponent = (function () {
    function AppComponent() {
        this.categories = [{ "id": 1, "name": "news", "priority": 9, "display": true, "feeds": [{ "id": 2, "name": "123", "postId": "SDFASDF" }, { "id": 123, "name": "news", "postId": "1223" }] },
            { "id": 1, "name": "events", "priority": 9, "display": true, "feeds": [{ "id": 2, "name": "123", "postId": "SDFASDF" }, { "id": 123, "name": "news", "postId": "1223" }] }];
        // constructor(private http :Http){
        //   //read category data from backend
        // }
        this.title = 'Category';
        this.newCategory = "";
    }
    AppComponent.prototype.addNewCategory = function () {
        alert("ADD A NEW category : " + this.newCategory);
    };
    AppComponent.prototype.loadCategories = function () {
        //this.http.get();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.loadCategories();
    };
    AppComponent.prototype.displayCategoriesDetails = function () {
        //  this.displayDetails = true;
        alert("try to display");
    };
    AppComponent.prototype.updateFeeds = function () {
        //save data into database
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "./template.html"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map