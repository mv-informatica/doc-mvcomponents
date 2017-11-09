import { AVisualComponent } from "../../component/abstract/a-visual-component";
import { IContainer } from "../interface/i-container";
import { IBlockContainer } from "../interface/i-block-container";
import { EventEmitter } from "../../core/event-emitter";
import { IRenderable } from "../../core/interface/i-renderable";
export declare abstract class ABasicContainer<T extends IRenderable> extends AVisualComponent implements IContainer<T> {
    protected isAttached: boolean;
    onAttached: EventEmitter<void>;
    protected addBlockContainer(): this;
    protected readonly blockContainer: IBlockContainer;
    protected resolveAttachement(renderable: T): void;
    protected insertItem(item: T, method: string): void;
    append(item: T): this;
    prepend(item: T): this;
    setEnable(on: boolean): this;
    isEnable(): boolean;
    attached(): void;
}
