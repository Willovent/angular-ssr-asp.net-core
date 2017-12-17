"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.todos = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.todos.push({ name: 'Faire une super présentation', check: false });
        this.todos.push({ name: 'Comparer avec et sans SSR', check: false });
        this.todos.push({ name: 'Montrer le code du rendu serveur', check: false });
        this.todos.push({ name: 'Montrer préboot', check: false });
    };
    AppComponent.prototype.addTodo = function () {
        this.todos.push({ name: this.newTodo, check: false });
        this.newTodo = '';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map