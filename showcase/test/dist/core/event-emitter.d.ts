import { EEventEmitterStatus } from "./enum/e-event-emitter-status";
export interface IEventSubscribe {
    ref: string;
    cancel?: Function;
}
export interface IEventEmitterError {
    error: string;
    status: EEventEmitterStatus;
}
export interface IEventEmitter {
    done(p_onSuccess: Function, p_onError?: (err: IEventEmitterError) => any): void;
}
export declare class EventInsc implements IEventSubscribe {
    ref: string;
    private eventInst;
    constructor(refid: string, peventEmitter: EventEmitter<any>);
    cancel(): void;
}
export interface IConfigEmitter {
}
export declare class EventEmitter<T> {
    private _events;
    private _next_iterator;
    private _cancel_next;
    private _lastvalue;
    private config;
    constructor(config?: IConfigEmitter);
    emit(value: T): IEventEmitter;
    private next(value);
    private getRefId();
    subscribe(p_callback: (value: T) => any): IEventSubscribe;
    once(p_callback: (value: T) => any): IEventSubscribe;
    hasSubscribers(): boolean;
    unsubscribeAll(): void;
    cancel(): void;
    unsubscribe(subscribe: IEventSubscribe): void;
    readonly emittedValue: T;
}
