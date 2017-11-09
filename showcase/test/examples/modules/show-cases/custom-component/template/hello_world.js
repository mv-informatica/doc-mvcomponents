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
  elementOpen("div", "f3a1d9b1-94bf-4ae4-966e-42fae28147ff", hoisted1)
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
      var $key = "5d7bf9c1-2d83-4782-821d-700ef8e0172d_" + $item
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
      var $key = "e5324183-170e-48e4-9dab-e4d7178f441a_" + $item
      elementOpen("input", $key, null, "value", $item+':'+item)
      elementClose("input")
    }, this)
  }
  elementOpen("ul")
    __target = $this.messages
    if (__target) {
      ;(__target.forEach ? __target : Object.keys(__target)).forEach(function($value, $item, $target) {
        var msg = $value
        var $key = "073b6902-fd24-4498-a482-bdafa9820193_" + $item
        elementOpen("li", $key)
          text("            " + (msg) + "       ")
        elementClose("li")
      }, this)
    }
  elementClose("ul")
  elementOpen("div", "03b49359-fba1-4074-b4a4-ec5871c86afd", hoisted2, "ondragstart", function ($event) {
    var $element = this;
  $event.dataTransfer.setData('text', $event.target.id);})
    elementOpen("h4")
      text("DRAG TEST")
    elementClose("h4")
  elementClose("div")
  elementOpen("div", "c50c8c53-3f7b-422d-8a8c-360ae93dd652", hoisted3, "ondrop", function ($event) {
    var $element = this;
  $event.preventDefault();var data = $event.dataTransfer.getData('text');$this.addTodo(data);}, "ondragover", function ($event) {
    var $element = this;
  $event.preventDefault();$event})
    elementOpen("h4")
      text("DROP TEST")
    elementClose("h4")
  elementClose("div")
  elementOpen("input", "701df55a-02fd-4414-aa45-560621cc50b5", hoisted4, "value", $this.mytext?$this.mytext:'nothing changed')
  elementClose("input")
  elementOpen("button", null, null, "onclick", function ($event) {
    var $element = this;
  $event.preventDefault();$this.mytext=new String('default text2');alert($this.mytext);$this.refresh()})
    text("test change")
  elementClose("button")
}
})()
})
