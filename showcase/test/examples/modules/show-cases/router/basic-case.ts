import {Box} from "mvcomponents/container";
import {LinkButton} from "mvcomponents/button";
import {router,RouterView} from "mvcomponents/router";
import {BasicRouteTest} from "./basic-route-test";


export class BasicCase extends Box{
	constructor(){
		super();

		this
			.addRouter()
			.buildLink()
			.buildRouterPreview();

	}
	private buildLink():BasicCase{
		this.append(
			new LinkButton("teste de rota")
			.setURL("/router-test/123/test")
		);	
		return this;
	}
	private addRouter():BasicCase{
		router.push({
			path:"/router-test/:id/:desc"
			,module:BasicRouteTest
			,routerView:"router-test"
		});		
		return this;
	}
	private buildRouterPreview():BasicCase{
		let routerView = new RouterView({name:"router-test"});
		routerView.setCssProperties({border:"1px solid #ccc",height:"120px"})
		this.append(routerView);
		return this;
	}
}
