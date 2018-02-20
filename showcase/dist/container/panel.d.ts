
import { AContainer } from "./abstract/a-container";
import { Form } from "./form";
import { Dialog } from "./dialog";
import { Tab } from "./tab";
import { Box } from "./box";
import { ButtonGroup } from "./button-group";
import { EBasicColorStatus } from "../component/enum/e-basic-color-status";
import { FullCalendar } from "../widget/full-calendar";
export declare type IPanelItem = Form<any> | Dialog | Tab | Panel | FullCalendar | Box;
export declare class Panel extends AContainer<IPanelItem> {
    private title;
    header: ButtonGroup;
    constructor(title: string);
    showTitle(show: boolean): Panel;
    setTitle(title: string): Panel;
    getTitle(): string;
    setColor(color: EBasicColorStatus): Panel;
    protected insertItem(item: IPanelItem, method: string): void;
}
