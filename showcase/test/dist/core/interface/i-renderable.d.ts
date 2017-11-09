export interface IRenderable {
    element?: HTMLElement;
    attached?: () => any;
    rendered?: () => any;
}
