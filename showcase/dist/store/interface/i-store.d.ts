import { EventEmitter } from "../../core/event-emitter";
export interface IStore<T> {
    get(): T[];
    set(objs: T[]): void;
    onChange: EventEmitter<any>;
}
