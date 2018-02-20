
import { EventEmitter } from "../core/event-emitter";
import { AInput } from "./abstract/a-input";
export interface IFileSelected {
    filesCount: number;
    fileLabel: string;
}
export declare class FileInput extends AInput<File> {
    private handler;
    private display;
    onSelectFile: EventEmitter<IFileSelected>;
    constructor(placeholder?: string);
    private getRealFileInput();
    setAccept(accept: string): this;
    setPlaceholder(placeholder: string): this;
    getValue(): File;
    encode(value: File): string;
    decode(value: string): File;
    setValue(file: File): this;
    clear(): this;
}
