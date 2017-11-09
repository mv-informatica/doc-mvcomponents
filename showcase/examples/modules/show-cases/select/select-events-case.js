define(["require", "exports", "tslib", "mvcomponents/container", "mvcomponents/input"], function (require, exports, tslib_1, container_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SelectEventsCase = (function (_super) {
        tslib_1.__extends(SelectEventsCase, _super);
        function SelectEventsCase() {
            var _this = _super.call(this) || this;
            var itselect1 = new input_1.Select({ multiple: true });
            itselect1
                .setValueField("id")
                .setDescriptionField("name");
            _this.append(itselect1);
            itselect1.setData([
                { id: 1, name: "teste 1" },
                { id: 2, name: "teste 2" },
                { id: 3, name: "teste 3" }
            ]);
            itselect1.onSelect.subscribe(function (valores) {
                console.log("valor:" + valores[0].id + " , nome:" + valores[0].name);
            });
            itselect1.onNoResultsFound.subscribe(function (termo) {
                alert("\"" + termo + "\" n\u00E3o encontrado!!!");
            });
            itselect1.onBeforeDropdown.subscribe(function () {
                console.log("antes de mostrar lista!!!");
            });
            itselect1.onClearMultiItem.subscribe(function (item) {
                alert("item " + item.name + " removido da lista");
            });
            return _this;
        }
        return SelectEventsCase;
    }(container_1.Form));
    exports.SelectEventsCase = SelectEventsCase;
});
