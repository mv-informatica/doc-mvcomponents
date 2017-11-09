define(["require", "exports", "tslib", "mvcomponents/core", "../custom_element/macro-comp", "./micro-comp", "jquery"], function (require, exports, tslib_1, core_1, macrocomp, micro_comp_1, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MyCustomComponent = (function () {
        function MyCustomComponent() {
            this.name = "ops!";
            this.description = "my first component";
        }
        MyCustomComponent.prototype.attached = function () {
        };
        return MyCustomComponent;
    }());
    MyCustomComponent = tslib_1.__decorate([
        core_1.Render({
            templateUrl: "test/js/teste/custom_element/hello_world"
        })
    ], MyCustomComponent);
    var HelloWorldComp = (function () {
        function HelloWorldComp() {
            this.message = "okkk";
            this.messages = [];
            this.todos = [
                { id: 1, text: 'ops' },
                { id: 2, text: 'ops 2' },
                { id: 3, text: 'ops 3' },
                { id: 4, text: 'ops 4' },
                { id: 5, text: 'ops 5' }
            ];
            this.inputs = [];
        }
        HelloWorldComp.prototype.addTodo = function (msg) {
            this.todos.push({
                id: new Date().getTime(),
                text: msg
            });
            this.refresh();
        };
        HelloWorldComp.prototype.microRender = function (data) {
            var fnName = Object.keys(macrocomp)[0];
            macrocomp[fnName](data);
            return "";
        };
        HelloWorldComp.prototype.attached = function () {
            this.testmacrocomp();
        };
        HelloWorldComp.prototype.testmacrocomp = function () {
            var ncomp = new micro_comp_1.MicroComp();
            jquery(this.element).find(".container-test:first").append(ncomp.element);
            console.log(ncomp);
        };
        HelloWorldComp.prototype.refresh = function () {
            this.refreshRender();
        };
        HelloWorldComp.prototype.generateRecords = function () {
            this.inputs = Array(6000).join("a-").split("-");
            this.refresh();
        };
        HelloWorldComp.prototype.addMessage = function (msg) {
            if (msg) {
                this.messages.push(msg);
            }
            ;
        };
        return HelloWorldComp;
    }());
    HelloWorldComp = tslib_1.__decorate([
        core_1.Render({
            templateUrl: "test/js/teste/custom_element/hello_world"
        })
    ], HelloWorldComp);
    exports.HelloWorldComp = HelloWorldComp;
});
