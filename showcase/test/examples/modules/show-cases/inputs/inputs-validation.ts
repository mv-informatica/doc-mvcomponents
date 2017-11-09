import {EVerticalAlign, EMouseEvent,EInputEvent, EKeyboardEvent,EBasicColorStatus} from "mvcomponents/component";
import {Box,Form,Panel,ButtonGroup,RadioGroup,Fieldset} from "mvcomponents/container";
import {Button,RadioButton} from "mvcomponents/button";
import {Label} from "mvcomponents/widget";
import {Separator} from "mvcomponents/separator";
import {Validation} from "mvcomponents/core";
import {DatePickerInput,ColorPickerInput, EDatePartType, TextArea,NumericStepper,TextInput,CheckBox,EmailInput,Select,PasswordInput,FileInput} from "mvcomponents/input";
import {IModuleCreateEvent} from "mv-workspace";
import jquery  = require("jquery");


export class InputsValidation extends Panel{
	constructor(){
		super("Validations");
		this.buildCase1();
		this.buildCase2();
	}
	private buildCase1(){
		let form1 = new Form();
		this.append(form1);

		let field1 = new TextInput()
			.setSize(2)
			.setLabel("name")
			.setName("field1")
			.markRequired(true)
			//.setRequired(true);

		let field2 = new TextInput()
			.setLabel("full name")
			.setSize(7)
			.setName("field2")
			.markRequired(true)
			//.setRequired(true);

		const validAll = () => {
			Promise
				.all([
					field1.validate()
					,field2.validate()
				])
				.then(rests=>{
					console.log('all right',rests);

				})
				.catch(errs => {
					console.log('erros in:',errs);
				})
		}	


		let fieldUser = new Select()
				.setLabel("status")
				.setSize(3)
				.setName("fieldUser")
				.setValueField("id")
				.setDescriptionField("user")
				.setRequired(true);

		fieldUser.setData([
			{id:1,user:"teste 1"}
			,{id:2,user:"teste 2"}
			,{id:3,user:"teste 3"}
			,{id:4,user:"teste 4"}
		])		

		let fieldset1 = new Fieldset("double validation");

		fieldset1
			.append(field1)
			.append(field2)
			.append(fieldUser);

		form1.append(fieldset1);	


		field1.addEvent(EKeyboardEvent.KEYUP,evt=>validAll());
		field2.addEvent(EKeyboardEvent.KEYUP,evt=>validAll());

		let validName = new Validation()
			.setMethod(
				vl => field1.getValue()||field2.getValue()?true:false
			)

		//field1.validator.onValidate.subscribe(errs => field1.setRequired(errs.length > 0));
		//field2.validator.onValidate.subscribe(errs => field2.setRequired(errs.length > 0));

		field1.validator.onValidate.subscribe(errs => field1.markRequired(errs.length > 0));
		field2.validator.onValidate.subscribe(errs => field2.markRequired(errs.length > 0));


		field1.addValidation(validName);
		field2.addValidation(validName);


		let btnValidAll = new Button("validation!");
		btnValidAll.addEvent(EMouseEvent.CLICK,evt=>form1
			.validate()
			.then(ok=>console.log(ok))
			.catch(errs=>console.log('errs',errs))
		);

		let btnClear = new Button("clear!")
		btnClear.addEvent(EMouseEvent.CLICK,evt=>{
			form1.clear();
			/*
			form1.validate().then(()=>{
				//console.log(form1.getData());
				form1.clear();
				//console.log(field2.getValue(),fieldUser.getValue())
				//console.log(form1.getData());
			})	
			*/		
		})



		fieldset1.append(
				new ButtonGroup()
					.setDefaultInnerVerticalAlign(EVerticalAlign.TOP)
					.append(btnValidAll)
					.append(btnClear)
		);
	}

	private buildCase2(){
		let form1 = new Form();
		this.append(form1);

		let field1 = new TextInput()
			.setSize(2)
			.setLabel("name")
			.setName("field1")
			//.setRequired(true);

		let field2 = new TextInput()
			.setLabel("nick name")
			.setSize(10)
			.setName("field2")
			.setRequired(true);
			//.setRequired(true);	

		let fieldset1 = new Fieldset("enable/disable validation");

		fieldset1
			.append(field1)
			.append(field2);

		form1.append(fieldset1);

		let validName = new Validation()
			.setMethod(
				vl => field1.getValue()||field2.getValue()?true:false
			)

		field1.addValidation(validName);
		field2.addValidation(validName);


		let btnDisableValidation = new Button("disable validation name!");
		btnDisableValidation.addEvent(EMouseEvent.CLICK,evt=>{
			field1.removeValidation(validName);
		});

		let btnEnableValidation = new Button("enable validation name!");
		btnEnableValidation.addEvent(EMouseEvent.CLICK,evt=>{
			field1.addValidation(validName);
		});

		let btnDisableAllValidation = new Button("disable all validation!");
		btnDisableAllValidation.addEvent(EMouseEvent.CLICK,evt=>{
			validName.cancel();
			field2.setRequired(false);
		});

		fieldset1.append(new ButtonGroup().setDefaultInnerVerticalAlign(EVerticalAlign.TOP).append(btnDisableValidation).append(btnEnableValidation).append(btnDisableAllValidation));


	}

}