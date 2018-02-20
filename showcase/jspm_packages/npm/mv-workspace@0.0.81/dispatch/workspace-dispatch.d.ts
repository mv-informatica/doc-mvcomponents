import { EventEmitter } from "mvcomponents/core";
import { IWorkspaceException } from "./i-workspace-exception";
export interface IWorkspaceAction {
    type: string;
}
export declare class WorkspaceDispatch {
    onChangeArea: EventEmitter<{
        name: string;
        params?: {};
    }>;
    onRegisterArea: EventEmitter<{
        name: string;
        path: string;
    }>;
    onRaiseException: EventEmitter<IWorkspaceException>;
    onSignOut: EventEmitter<any>;
    onResize: EventEmitter<{
        width: number;
        height: number;
    }>;
    onDispatch: EventEmitter<IWorkspaceAction>;
}
export declare var workspaceDispatch: WorkspaceDispatch;
