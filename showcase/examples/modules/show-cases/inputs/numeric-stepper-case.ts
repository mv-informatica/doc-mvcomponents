import {Form} from "mvcomponents/container";
import {NumericStepper} from "mvcomponents/input";

export class NumericStepperCase extends Form<any>{
	constructor(){
		super();
		let txi = new NumericStepper()
					.setLabel("values:")
					.setSize(2)
					.setMin(0)
					.setMax(100)
					.setStep(5);

		this.append(txi);
	}
}
