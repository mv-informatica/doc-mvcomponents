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
  elementOpen("div", "ceb2b523-6f3c-450d-a88c-3f256c10ed97", hoisted1)
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
      var $key = "4468d9e4-0783-42a4-8720-e6b051eb1bf7_" + $item
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
      var $key = "571bb10f-50fd-47a9-ae26-267b6e5621f5_" + $item
      elementOpen("input", $key, null, "value", $item+':'+item)
      elementClose("input")
    }, this)
  }
  elementOpen("ul")
    __target = $this.messages
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var msg = $value
        var $key = "c58bcfe9-d9a5-4189-b057-41c5f772ca7d_" + $item
        elementOpen("li", $key)
          text("            " + (msg) + "       ")
        elementClose("li")
      }, this)
    }
  elementClose("ul")
  elementOpen("div", "284f3f0c-874b-4045-9019-d2ac818e65b4", hoisted2, "ondragstart", function ($event) {
    var $element = this;
  $event.dataTransfer.setData('text', $event.target.id);})
    elementOpen("h4")
      text("DRAG TEST")
    elementClose("h4")
  elementClose("div")
  elementOpen("div", "77e92366-a90c-448b-b77d-02c79a8f1c24", hoisted3, "ondrop", function ($event) {
    var $element = this;
  $event.preventDefault();var data = $event.dataTransfer.getData('text');$this.addTodo(data);}, "ondragover", function ($event) {
    var $element = this;
  $event.preventDefault();$event})
    elementOpen("h4")
      text("DROP TEST")
    elementClose("h4")
  elementClose("div")
  elementOpen("input", "80c0a330-f5db-4f50-a2d5-53d60116dc81", hoisted4, "value", $this.mytext?$this.mytext:'nothing changed')
  elementClose("input")
  elementOpen("button", null, null, "onclick", function ($event) {
    var $element = this;
  $event.preventDefault();$this.mytext=new String('default text2');alert($this.mytext);$this.refresh()})
    text("test change")
  elementClose("button")
}
})()
})
