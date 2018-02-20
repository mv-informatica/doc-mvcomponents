define(["require", "exports", "tslib", "jquery", "../core/event-emitter", "../widget/abstract/a-widget", "jstree/dist/themes/default/style.min.css!", "jstree"], function (require, exports, tslib_1, jquery, event_emitter_1, a_widget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ETreeViewPosition;
    (function (ETreeViewPosition) {
        ETreeViewPosition[ETreeViewPosition["LAST"] = 0] = "LAST";
        ETreeViewPosition[ETreeViewPosition["FIRST"] = 1] = "FIRST";
    })(ETreeViewPosition = exports.ETreeViewPosition || (exports.ETreeViewPosition = {}));
    var TreeView = (function (_super) {
        tslib_1.__extends(TreeView, _super);
        function TreeView() {
            var _this = _super.call(this, "div", "") || this;
            _this.onSelect = new event_emitter_1.EventEmitter();
            jquery(_this.element).addClass("TreeView col-xs-12");
            return _this;
        }
        TreeView.prototype.refresh = function () {
            jquery(this.element).jstree(true).refresh();
            return this;
        };
        TreeView.prototype.clear = function () {
            this.setNodes([]);
            return this;
        };
        TreeView.prototype.addNode = function (p_node, p_posi, p_parent) {
            if (p_posi === void 0) { p_posi = ETreeViewPosition.LAST; }
            var tmp_parent = p_parent || jquery(this.element).jstree("get_selected");
            jquery(this.element).jstree("create_node", tmp_parent, p_node, ETreeViewPosition[p_posi].toLowerCase());
            return this;
        };
        TreeView.prototype.removeNode = function (p_node) {
            jquery(this.element).jstree("delete_node", p_node);
            return this;
        };
        TreeView.prototype.getSelectedNode = function () {
            var _a = jquery(this.element).jstree(true).get_selected(true)[0], id = _a.id, a_attr = _a.a_attr, icon = _a.icon, text = _a.text, state = _a.state, data = _a.data;
            return {
                id: id,
                a_attr: { href: a_attr.href, id: a_attr.id },
                icon: icon,
                text: text,
                state: state,
                data: data
            };
        };
        TreeView.prototype.setNodes = function (p_nodes) {
            var _this = this;
            if (!this._loaded) {
                this._loaded = true;
                jquery(this.element).jstree({
                    "core": {
                        "data": p_nodes,
                        "check_callback": true
                    }
                });
                jquery(this.element).on("select_node.jstree", function (evt, data) {
                    _this.onSelect.emit([_this.getSelectedNode()]);
                });
            }
            else {
                jquery(this.element).jstree(true).settings.core.data = p_nodes;
                this.refresh();
            }
            return this;
        };
        TreeView.prototype.updateNode = function (p_node) {
            var tmp_node = jquery(this.element).jstree(true).get_node(p_node.id);
            tmp_node.data = Object.assign({}, tmp_node.data, p_node.data);
            var jstreeRef = jquery(this.element);
            jstreeRef.jstree("set_icon", tmp_node, p_node.icon);
            jstreeRef.jstree("rename_node", tmp_node, p_node.text);
            return this;
        };
        return TreeView;
    }(a_widget_1.AWidget));
    exports.TreeView = TreeView;
});

//# sourceMappingURL=tree-view.js.map
