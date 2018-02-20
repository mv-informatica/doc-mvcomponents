define(["require", "exports", "jquery", "../system-application", "../../component/abstract/a-visual-component", "incremental-dom"], function (require, exports, jquery, system_application_1, a_visual_component_1, _IDOM) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EStatusInstanceClass;
    (function (EStatusInstanceClass) {
        EStatusInstanceClass[EStatusInstanceClass["CONFIGURED"] = 0] = "CONFIGURED";
        EStatusInstanceClass[EStatusInstanceClass["FAIL"] = 1] = "FAIL";
        EStatusInstanceClass[EStatusInstanceClass["STARTED"] = 2] = "STARTED";
    })(EStatusInstanceClass || (EStatusInstanceClass = {}));
    function Render(p_config) {
        return function (p_target) {
            var tmpClass = p_target.prototype;
            tmpClass.refreshRender = function () {
                var _thistmpele = this;
                if (_thistmpele._configWebElement) {
                    if (!_thistmpele._configWebElement.templateUrl) {
                        _thistmpele._configWebElement.status = EStatusInstanceClass.FAIL;
                        console.error("err:please, verify if your web element class has a 'Render' decorator or a templateUrl prorpertie is present!");
                    }
                    else {
                        _thistmpele._configWebElement.status = EStatusInstanceClass.STARTED;
                        System.import(system_application_1.SystemApplication.relativePathPackage + _thistmpele._configWebElement.templateUrl).then(function (tmp) {
                            if (_thistmpele.element) {
                                _IDOM.patch(_thistmpele.element, tmp[Object.keys(tmp)[0]], _thistmpele);
                                if (!_thistmpele._configWebElement.loaded) {
                                    _thistmpele._configWebElement.loaded = true;
                                    if (_thistmpele.attached) {
                                        _thistmpele.attached();
                                    }
                                    ;
                                }
                            }
                        });
                    }
                }
                else {
                    console.warn("err:please, verify if your element is trying to use 'refreshRender' method before it is ready in DOM!");
                }
            };
            tmpClass.setCssProperties = a_visual_component_1.AVisualComponent.prototype.setCssProperties;
            tmpClass.addStyleName = a_visual_component_1.AVisualComponent.prototype.addStyleName;
            tmpClass.removeStyleName = a_visual_component_1.AVisualComponent.prototype.removeStyleName;
            tmpClass.setStyleName = a_visual_component_1.AVisualComponent.prototype.setStyleName;
            tmpClass.setVisible = a_visual_component_1.AVisualComponent.prototype.setVisible;
            Object.defineProperty(tmpClass, "element", {
                get: function () {
                    var tmpElement = null;
                    var _this_ = this;
                    if (!_this_._configWebElement) {
                        _this_._configWebElement = {
                            loaded: false,
                            templateUrl: p_config.templateUrl,
                            status: EStatusInstanceClass.CONFIGURED
                        };
                    }
                    ;
                    if (!_this_._configWebElement.selector) {
                        _this_._uid = system_application_1.SystemApplication.getUid();
                        _this_._configWebElement.selector = "#uid_" + _this_._uid;
                        tmpElement = document.createElement('div');
                        jquery(tmpElement).addClass("col-xs-12").attr({ id: 'uid_' + _this_._uid });
                        _this_.refreshRender();
                    }
                    else if (jquery(_this_._configWebElement.selector).length > 0) {
                        return jquery(_this_._configWebElement.selector)[0];
                    }
                    return tmpElement;
                }
            });
        };
    }
    exports.Render = Render;
});

//# sourceMappingURL=d-render.js.map
