import {Render,ICustomComponent} from "mvcomponents/core";

@Render({
	templateUrl:"test/examples/modules/default-module-window/embed-video.template"
})
export class EmbedVideo implements ICustomComponent{
	private _videourl:string;
	private loaded:boolean;
	constructor(){
		this._videourl = "";
	}
	public attached(){
		this.loaded;
		if(this._videourl){
			(<ICustomComponent>this).refreshRender();
		}
	}
	public set videoUrl(videourl:string){
		this._videourl = videourl;
		if(this.loaded){
			(<ICustomComponent>this).refreshRender();
		}
	}
}
