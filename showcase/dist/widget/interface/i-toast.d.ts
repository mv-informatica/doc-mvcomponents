import { EventEmitter } from './../../core/event-emitter';
import { EToastPosition, EToastType } from '../enum/e-toast';
export interface IToastConfig {
    title?: string;
    message: string;
    position?: EToastPosition;
    type?: EToastType;
    allowClose?: boolean;
    timeOut?: number;
}
export interface IToast {
    onBeforeShow: EventEmitter<any>;
    onShow: EventEmitter<any>;
    onHide: EventEmitter<any>;
    show(): this;
}
export interface IToastService {
    defaults: IToastConfig;
    info(options: IToastConfig): IToast;
    info(message: string): IToast;
    warn(options: IToastConfig): IToast;
    warn(message: string): IToast;
    error(options: IToastConfig): IToast;
    error(message: string): IToast;
    success(options: IToastConfig): IToast;
    success(message: string): IToast;
}
