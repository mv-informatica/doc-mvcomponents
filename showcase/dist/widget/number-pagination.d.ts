import { Box } from "../container/box";
import { EventEmitter } from "../core/event-emitter";
import "twbs-pagination";
export interface IPaginationConfig {
    page?: number;
    rowsPerPage?: number;
    count: number;
    visiblePages?: number;
}
export declare class NumberPagination extends Box {
    onSelectPage: EventEmitter<number>;
    private config;
    constructor(config: IPaginationConfig);
    setRowsPerPage(rowsPerPage: number): this;
    setVisiblePages(visiblePages: number): this;
    setCount(count: number): this;
    setPage(page: number): this;
    refresh(): void;
}
