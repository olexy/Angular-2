import { Component, Input } from '@angular/core';

import { Task } from '../model/task';   //import the class

@Component({
    moduleId: module.id,    //this helps us use the template and css files without path
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: [ 'card.component.css']
})
export class CardComponent{ 
    @Input() task: Task;        //@Input() allow us to be able to pass data into the property
}