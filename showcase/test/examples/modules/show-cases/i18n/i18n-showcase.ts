import {i18n} from "mvcomponents/i18n";
import {Box} from "mvcomponents/container";
import {Alert} from "mvcomponents/widget";

export class I18nShowcase extends Box{
	constructor(){
		super();
		i18n.setConfig({lng:"pt-BR"})
		i18n
			.loadResource('assets/locales/')
			.then(resource => this.append(
				new Alert(`${i18n.key("modulob.titulo")} : ${i18n.key("lbtitle",{nome:"fulano"})} : ${i18n.lng}`)
			));
	}
}
