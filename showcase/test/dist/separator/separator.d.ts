import { AVisualComponent } from "../component/abstract/a-visual-component";
import { IRenderable } from "../core/interface/i-renderable";
import { EVerticalAlign } from "../component/enum/e-vertical-align";
export declare class Separator extends AVisualComponent implements IRenderable {
    private _defaultColor;
    constructor();
    setColor(color: string): Separator;
    setHeight(height: number): Separator;
    setVerticalAlign(align: EVerticalAlign): Separator;
    setTransparent(transparent: boolean): Separator;
}
