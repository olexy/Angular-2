import { Component } from '@angular/core';

import { Task } from './model/task'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
//create task1 object of the Task class imported above
    task1: Task = {
        content: "Learn to code",
        completed: false
    }

    task2: Task = {
        content: "Another Task",
        completed: true
    }
}