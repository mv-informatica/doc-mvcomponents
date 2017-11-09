define(["require", "exports", "mvcomponents/container", "mvcomponents/container", "mvcomponents/container", "mvcomponents/container", "mvcomponents/container", "mvcomponents/container", "mvcomponents/container", "mvcomponents/input", "mvcomponents/component", "mvcomponents/input", "mvcomponents/input", "mvcomponents/input", "mvcomponents/input"], function (require, exports, container_1, container_2, container_3, container_4, container_5, container_6, container_7, input_1, component_1, input_2, input_3, input_4, input_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var viewpager1 = new container_1.ViewPager();
    viewpager1.appendTo("body");
    viewpager1.setCssProperties({ backgroundColor: '#fff' });
    var box1 = new container_2.Box();
    box1.setCssProperties({ border: "1px solid #999", height: "200px" });
    box1.setSize(10);
    box1.setOffSet(1);
    var panel1 = new container_3.Panel("teste 1");
    box1.append(panel1);
    var dialog1 = new container_4.Dialog("dialog 1");
    var viewstack1 = new container_5.ViewStack();
    viewpager1.append(viewstack1);
    var panelA = new container_3.Panel("panel A");
    var panelB = new container_3.Panel("panel B");
    viewstack1
        .append(panelA, 'user-list')
        .append(panelB, 'user-detail');
    window.setTimeout(function (evt) {
    }, 2000);
    var tabpanel1 = new container_6.TabPanel().setSize(12);
    var tab1 = new container_6.Tab("tab 1");
    tab1.setContent(new container_3.Panel("panel1"));
    tabpanel1.append(tab1);
    var tab2 = new container_6.Tab("tab 2");
    tab2.setClosable(true);
    tab2.setContent(new container_3.Panel("panel2"));
    tabpanel1.append(tab2);
    var form1 = new container_7.Form();
    viewpager1.append(form1);
    var t1 = new input_1.TextInput()
        .setLabel("id")
        .setSize(2, component_1.EViewSize.EXTRA_SMALL)
        .setName("id");
    var t2 = new input_1.TextInput()
        .setLabel("name")
        .setSize(5, component_1.EViewSize.EXTRA_SMALL)
        .setOffSet(5)
        .setName("name");
    t2.addEvent(component_1.EInputEvent.CHANGE, function (evt) {
        console.log(t2.getValue());
    });
    t1.addEvent(component_1.EKeyboardEvent.KEYPRESS, function (evt) {
        console.log(t1.getValue());
    });
    form1
        .append(t1)
        .append(t2);
    var t3 = new input_2.NumericStepper()
        .setLabel("exp")
        .setSize(3)
        .setMax(15)
        .setMin(5)
        .setStep(5);
    t3.setValue(5);
    form1.append(t3);
    var t4 = new input_3.DatePickerInput().setLabel("date");
    form1.append(t4);
    var color = new input_4.ColorPickerInput()
        .setSize(3)
        .setLabel("color");
    form1.append(color);
    var users = [
        { id: 1, name: 'test one' },
        { id: 2, name: 'user one' },
        { id: 3, name: 'user two' },
        { id: 4, name: 'user three' }
    ];
    var t5 = new input_5.Select()
        .setLabel("users")
        .setValueField("id")
        .setDescriptionField("name");
    form1.append(t5);
    t5.setData(users);
    t5.onSelect.subscribe(function (itemusers) { return alert(itemusers[0].name); });
});
