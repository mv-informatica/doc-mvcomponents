import { IRenderable } from './../../core/interface/i-renderable';
export interface IInputAddon extends IRenderable {
    setIcon(icon: string): this;
    setText(text: string): this;
}
