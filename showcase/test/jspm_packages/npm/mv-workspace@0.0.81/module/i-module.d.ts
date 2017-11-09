export interface IModuleCreateEvent {
    onCreate(params?: {}): void;
}
export interface IModuleStopEvent {
    onStop(): void;
}
export interface IModuleRestartEvent {
    onRestart(params?: {}): void;
}
export interface IModuleDestroyEvent {
    onDestroy(): void;
}
export interface IModuleCompleteEvents extends IModuleCreateEvent, IModuleStopEvent, IModuleRestartEvent, IModuleDestroyEvent {
    show(): void;
    hide(): void;
    load(path: string, params: {}): void;
}
