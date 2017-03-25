import { Component } from '@angular/core';

import { Task } from './model/task'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
//create task1 object of the Task class imported above
   private tasks = [
       new Task(
           "Buy a monkey",
           false
       ),
       new Task(
           "Walk the dog",
           false
       )
   ]
}