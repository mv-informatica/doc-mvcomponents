define(["require", "exports", "tslib", "mvcomponents/container", "../../default-module-window/default-module-window"], function (require, exports, tslib_1, container_1, default_module_window_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function (_super) {
        tslib_1.__extends(Index, _super);
        function Index() {
            var _this = _super.call(this) || this;
            _this.append(new default_module_window_1.DefaultModuleWindow("Notificação", "exemplo simples")
                .loadExample("examples/modules/show-cases/notification/notification-simple-case", "NotificationSimpleCase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Alterando o tipo", "alterando o tipo de nofificação")
                .loadExample("examples/modules/show-cases/notification/notification-types-case", "NotificationTypesCase"));
            _this.append(new default_module_window_1.DefaultModuleWindow("Alterando o posicionamento", "alterando a posição da nofificação")
                .loadExample("examples/modules/show-cases/notification/notification-position-case", "NotificationPositionCase"));
            return _this;
        }
        return Index;
    }(container_1.Box));
    exports.Index = Index;
});
