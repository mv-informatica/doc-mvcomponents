import { Validation } from "./validation";
export declare class Validations {
    static notEmpty(): Validation<any>;
    static lessThan(v: number): Validation<number>;
    static greaterThan(v: number): Validation<number>;
    static regexp(regexp: RegExp): Validation<string>;
    static maxLength(v: number): Validation<string>;
    static minLength(v: number): Validation<string>;
    static email(): Validation<string>;
    static color(): Validation<string>;
}
