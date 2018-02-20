export declare enum EItemMenuStatus {
    ACTIVED = 0,
    CANCELED = 1,
}
export interface IItemMenu {
    id?: number;
    label: string;
    "module": string;
    path: string;
    icon?: string;
    iconColor?: string;
    image?: string;
    order: number;
    params?: {
        [attr: string]: string | boolean | number | Date;
    };
    state?: EItemMenuStatus;
    itens?: IItemMenu[];
    type?: string;
}
