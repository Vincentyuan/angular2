import { Component } from '@angular/core';
import { Injectable }    from '@angular/core';
import { HTTP } from "@angular/http";

export class feed {
    id: number;
    name: string;
    postId: string;
}

export class Category {
    id: number;
    name: string;
    priority: number;
    displayBackend: boolean;
    displayRaspberryPis: boolean;
    feeds: feed[];
}

@Component({
    selector: 'my-app',
    templateUrl: "./template.html"
})
export class AppComponent implements OnInit {

    categories: Category[] = [{ "id": 1, "name": "news", "priority": 9, "display": true, "feeds": [{ "id": 2, "name": "123", "postId": "SDFASDF" },{"id":123,"name":"news","postId":"1223"}] },
    { "id": 1, "name": "events", "priority": 9, "display": true, "feeds": [{ "id": 2, "name": "123", "postId": "SDFASDF" },{"id":123,"name":"news","postId":"1223"}] }];

    // constructor(private http :Http){
    //   //read category data from backend
    // }

    title = 'Category';
    newCategory = "";

    addNewCategory(): void {
        alert("ADD A NEW category : " + this.newCategory);
    }
    loadCategories(): void {
        //this.http.get();
    }
    ngOnInit(): void {
        this.loadCategories();
    }
    displayCategoriesDetails(): void {
        //  this.displayDetails = true;
        alert("try to display");
    }
    updateFeeds(): void {
      //save data into database
    }
}
