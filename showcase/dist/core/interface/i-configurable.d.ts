export interface IConfigurable {
    configure(method: (me: this) => any): this;
}
