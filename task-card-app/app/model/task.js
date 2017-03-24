"use strict";
var Task = (function () {
    //tells us what field we need to initialise an object of this class with
    function Task(content, completed) {
        this.content = content;
        this.completed = completed;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map