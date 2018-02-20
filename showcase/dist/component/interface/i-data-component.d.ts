export interface IDataComponent<T> {
    setData(data: T[]): this;
    clear(): this;
    refresh(): this;
}
