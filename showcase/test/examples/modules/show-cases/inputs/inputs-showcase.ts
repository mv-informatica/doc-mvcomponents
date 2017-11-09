import {EVerticalAlign, EMouseEvent,EInputEvent, EKeyboardEvent,EBasicColorStatus,EViewSize} from "mvcomponents/component";
import {Box,Form,Panel,ButtonGroup,RadioGroup} from "mvcomponents/container";
import {Button,RadioButton} from "mvcomponents/button";
import {Label} from "mvcomponents/widget";
import {Separator} from "mvcomponents/separator";
import {Validation} from "mvcomponents/core";
import {DatePickerInput,ColorPickerInput, EDatePartType, TextArea,NumericStepper,TextInput,CheckBox,EmailInput,Select,PasswordInput,FileInput} from "mvcomponents/input";
import {IModuleCreateEvent} from "mv-workspace";
import jquery  = require("jquery");


export class InputsShowcase extends Form<any> implements IModuleCreateEvent{
    private itText:TextInput;
    constructor(){
        super();
        this.setSize(8).setSize(12,EViewSize.EXTRA_SMALL,EViewSize.SMALL);
        let formB:Form<any> = new Form();
        this.append(formB.setSize(12));
        this.buildInputs(formB);
    }

    private buildInputs(pform:Form<any>){

    	this.itText = new TextInput()
        .setMask("*99")
        .setSize(1)
        .setLabel("Cód.");        
        this.itText.setRequired(true);
        pform.append(this.itText);

        let itPass = new PasswordInput()
            .setLabel('Pass')
            .setSize(3)
            .setSize(4,EViewSize.EXTRA_SMALL);
        pform.append(itPass);

        let simpleDateInput = new DatePickerInput({language: "es"})
            .setSize(3)
            .setSize(6,EViewSize.EXTRA_SMALL)
            .setOffSet(5)
            .setLabel("Data");
        pform.append(simpleDateInput);

        let itSelect = new Select()
            .setSize(5)
            .setLabel("Users")
            .setValueField("id")
            .setRequired(true)
            .setDescriptionField("desc");
        itSelect.setData([
            {id:1,desc:'ops'}
            ,{id:2,desc:'test'}
            ,{id:3,desc:'test 3'}
            ,{id:4,desc:'ops 4'}
        ]);

        pform.append(itSelect);

        itSelect.onSelect.subscribe(dta=>{
            console.log(dta);
        });

		let ckboxEnableForm:CheckBox = new CheckBox("","o formulário deve ser desabilitado.").displayLabel(false);
        ckboxEnableForm.setCheckedValue("n").setRequired(true);       
        pform.append(ckboxEnableForm);
        ckboxEnableForm.addEvent(EMouseEvent.CLICK,()=>{
            pform.setEnable(ckboxEnableForm.getValue() !== "y");
        });

        let simpleTextArea = new TextArea()
                                    .setHeight("70px")
                                    .setLabel("OBS")
                                    .setRows(4);
        pform.append(simpleTextArea);

		let btnOk:Button = new Button("approved").setIcon("glyphicon glyphicon-bullhorn");

        pform.append(new ButtonGroup().setDefaultInnerVerticalAlign(EVerticalAlign.TOP).append(btnOk));
        	btnOk.addEvent(EMouseEvent.CLICK,evt=>{
        })

    }

    onCreate():void{

    }

}
