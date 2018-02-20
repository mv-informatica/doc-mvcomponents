import { IRenderable } from './../../core/interface/i-renderable';
export interface IPopover extends IRenderable {
    show(): this;
    hide(): this;
    toggle(): this;
}
