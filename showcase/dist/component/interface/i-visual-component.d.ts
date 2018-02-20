import { EViewSize } from "../enum/e-view-size";
import { EMouseEvent } from "../enum/e-mouse-event";
import { EKeyboardEvent } from "../enum/e-keyboard-event";
import { IRenderable } from '../../core/interface/i-renderable';
export interface IVisualComponent extends IRenderable {
    setSize(p_size: number, ...p_size_views: EViewSize[]): this;
    setOffSet(p_size: number, ...p_size_views: EViewSize[]): this;
    setVisible(p_on: boolean): this;
    addEvent(p_type: EMouseEvent | EKeyboardEvent, p_handler: Function): void;
    removeEvent(p_type: EMouseEvent | EKeyboardEvent, p_function?: Function): void;
    setCssProperties(p_properties: {
        [s: string]: string;
    }): this;
    addStyleName(p_class_names: string): this;
    removeStyleName(p_class_names: string): this;
    setStyleName(p_class_names: string): this;
    hasStyleName(p_class_name: string): boolean;
    isVisible(): boolean;
}
export interface IViewSize {
    col: string;
    size: string;
}
