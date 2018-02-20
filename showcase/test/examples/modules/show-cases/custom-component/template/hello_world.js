define(['exports', 'incremental-dom'], function (exports, IncrementalDOM) {
var patch = IncrementalDOM.patch
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var skip = IncrementalDOM.skip
var currentElement = IncrementalDOM.currentElement
var text = IncrementalDOM.text

var hoisted1 = ["class", "container-test"]
var hoisted2 = ["id", "asdf1", "draggable", "true", "style", "cursor:move;width:64px;height:64px;border:1px solid green;"]
var hoisted3 = ["id", "asdf2", "style", "height:50px;border:1px solid red"]
var hoisted4 = ["type", "text"]
var __target

exports.HelloWorld = (function () {
  return function HelloWorld ($this) {
  elementOpen("div", "05387816-f38c-423b-8f1e-64aabf12b09a", hoisted1)
  elementClose("div")
  elementOpen("h1", null, null, "onmouseover", function ($event) {
    var $element = this;
  $event.preventDefault();$this.tmptxt='mouse over me!';$this.refresh()}, "onclick", function ($event) {
    var $element = this;
  $event.preventDefault();{$this.addMessage($this.tmptxt);$this.tmptxt=''}})
    text("             Message: " + ($this.message) + " " + ($this.tmptxt) + "     ")
  elementClose("h1")
  __target = $this.todos
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var todo = $value
      var $key = "34663b9f-ab98-4284-a448-53fb59ae4e46_" + $item
      elementOpen("h4", $key)
        text("         " + ($this.microRender(todo)) + "     ")
      elementClose("h4")
    }, this)
  }
  elementOpen("button", null, null, "onclick", function ($event) {
    var $element = this;
  $event.preventDefault();$this.generateRecords()})
    text("Gerar Inputs")
  elementClose("button")
  __target = $this.inputs
  if (__target) {
    ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
      var item = $value
      var $key = "2ef0404e-3779-4c88-bd90-ab501cf6d5ef_" + $item
      elementOpen("input", $key, null, "value", $item+':'+item)
      elementClose("input")
    }, this)
  }
  elementOpen("ul")
    __target = $this.messages
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var msg = $value
        var $key = "e457f0fb-a1a6-45dc-9d00-9a6f67e5e67d_" + $item
        elementOpen("li", $key)
          text("            " + (msg) + "       ")
        elementClose("li")
      }, this)
    }
  elementClose("ul")
  elementOpen("div", "ea4c2895-7cb8-4cac-8c9d-51f698fd9c1b", hoisted2, "ondragstart", function ($event) {
    var $element = this;
  $event.dataTransfer.setData('text', $event.target.id);})
    elementOpen("h4")
      text("DRAG TEST")
    elementClose("h4")
  elementClose("div")
  elementOpen("div", "3cceeb61-3ba1-4e4e-9c49-bccb81682130", hoisted3, "ondrop", function ($event) {
    var $element = this;
  $event.preventDefault();var data = $event.dataTransfer.getData('text');$this.addTodo(data);}, "ondragover", function ($event) {
    var $element = this;
  $event.preventDefault();$event})
    elementOpen("h4")
      text("DROP TEST")
    elementClose("h4")
  elementClose("div")
  elementOpen("input", "b46514cf-720c-430e-8570-592fe562287c", hoisted4, "value", $this.mytext?$this.mytext:'nothing changed')
  elementClose("input")
  elementOpen("button", null, null, "onclick", function ($event) {
    var $element = this;
  $event.preventDefault();$this.mytext=new String('default text2');alert($this.mytext);$this.refresh()})
    text("test change")
  elementClose("button")
}
})()
})
