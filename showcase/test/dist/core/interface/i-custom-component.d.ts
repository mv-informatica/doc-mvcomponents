export interface ICustomComponent {
    attached: () => void;
    refreshRender?: () => void;
    setVisible?(p_on: boolean): void;
    setCssProperties?(p_properties: {
        [s: string]: string;
    }): void;
    addStyleName?(p_class_names: string): void;
    removeStyleName?(p_class_names: string): void;
    setStyleName?(p_class_names: string): void;
    element?: HTMLElement;
}
