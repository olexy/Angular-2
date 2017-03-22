import { Component } from '@angular/core';

@Component({
    moduleId: module.id,    //this helps us use the template and css files without path
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: [ 'card.component.css']
})
export class CardComponent{ }