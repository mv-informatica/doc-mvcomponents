
import { AWidget } from "./abstract/a-widget";
import { EBasicColorStatus } from "../component/enum/e-basic-color-status";
import { EventEmitter } from "./../core/event-emitter";
import { EProgressStyle } from "./enum/e-progressbar";
export declare class ProgressBar extends AWidget {
    private current;
    private duration;
    private animationDisabled;
    onProgress: EventEmitter<number>;
    constructor(progress?: number, duration?: number);
    setProgress(progress: number): ProgressBar;
    setDuration(duration: number): ProgressBar;
    getProgress(): number;
    private getInnerProgressBar();
    disableAnimation(off: boolean): ProgressBar;
    setStyle(style: EProgressStyle): ProgressBar;
    setHeight(height: string): ProgressBar;
    setColor(bgc: EBasicColorStatus): ProgressBar;
    private setToolTip(tooltip);
    private setLabel(nlabel);
}
