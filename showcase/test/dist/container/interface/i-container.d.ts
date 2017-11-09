import { IVisualComponent } from "../../component/interface/i-visual-component";
import { IRenderable } from "../../core/interface/i-renderable";
export interface IContainer<T extends IRenderable> extends IVisualComponent {
    append(item: T): this;
    prepend(item: T): this;
}
