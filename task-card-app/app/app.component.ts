import { Component } from '@angular/core';

import { Task } from './model/task'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ]
})

export class AppComponent {
//create tasks object of the Task class imported above
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
   private currentTask = new Task(null, false); //null, false is to populate the new task cos the feidl is required
   
   addTask() {
       let taskToAdd = new Task(this.currentTask.content, this.currentTask.completed); //use this keyword to refrence the currentTask obj above
       this.tasks.push(taskToAdd);                   //use this keyword to refrence the task array above
   }  
   
}