import {Box} from "mvcomponents/container";
import {Label} from "mvcomponents/widget";
import {$http,IRequestConfig} from "mvcomponents/http";

export class HttpShowcase extends Box{
	constructor(){
		super();
		$http
			.get("examples/modules/mocks/events.json")
			.params({
				parametro1:"teste"
				,parametro2:"teste2"
			})
			.header({
				"x-parametro-qualquer":"parametro via header"
			})
			.then((dta,config,headers) => this
					.append(new Label(JSON.stringify(dta)))
			)
	}
}