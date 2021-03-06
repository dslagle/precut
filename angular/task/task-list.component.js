"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_service_1 = require('./task.service');
var TaskListComponent = (function () {
    function TaskListComponent(taskService) {
        this.taskService = taskService;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getTasks()
            .subscribe(function (tasks) { return _this.tasks = tasks; });
    };
    TaskListComponent.prototype.onSelect = function (task) {
        this.selectedTask = task;
        this.selectedTask.status = 2;
        this.taskService.executeTask(task)
            .subscribe(function (result) {
            console.log(result);
            task.status = 3;
        }, function (err) { return task.status = 4; });
    };
    TaskListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "task-list",
            template: "\n        <div class=\"list-group\">\n            <a style=\"cursor: default;\" class=\"list-group-item\" *ngFor=\"let t of tasks\" (click)=\"onSelect(t)\" [class.active]=\"t === selectedTask\">\n                <img src=\"resources/ready.svg\" width=\"32\" height=\"32\" *ngIf=\"t.status === 1\" />\n                <img src=\"resources/ajax-loader.gif\" *ngIf=\"t.status === 2\" />\n                <img src=\"resources/ic_check_circle_black_18dp.png\" *ngIf=\"t.status === 3\" />\n                <img src=\"resources/ajax-loader.gif\" *ngIf=\"t.status === 4\" />\n                <span>{{t.name}}</span>\n            </a>\n        </div>\n    ",
            styleUrls: [
                "task-list.component.css"
            ]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.component.js.map