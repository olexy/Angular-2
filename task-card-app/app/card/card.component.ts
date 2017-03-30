import { Component, Input } from '@angular/core';

import { Task } from '../model/task';   //import the class

@Component({
    moduleId: module.id,    //this helps us use the template and css files without path
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: [ 'card.component.css']
})
export class CardComponent{ 
    @Input() task: Task;        //@Input() is to be able to pass data from the property from main (app) component

    statusToggle(){             //Switch the completed boolean bwteen true and false
        this.task.completed = !this.task.completed      //set 'task completed' to what its not currently is
    }
}