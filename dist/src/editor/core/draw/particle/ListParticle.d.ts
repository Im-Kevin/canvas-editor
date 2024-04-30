import { ListStyle, ListType } from '../../../dataset/enum/List';
import { IElement, IElementPosition } from '../../../interface/Element';
import { IRow } from '../../../interface/Row';
import { Draw } from '../Draw';
export declare class ListParticle {
    private draw;
    private range;
    private options;
    private readonly UN_COUNT_STYLE_WIDTH;
    private readonly DEFAULT_DRAWDISC_WIDTH;
    private readonly MEASURE_BASE_TEXT;
    private readonly LIST_GAP;
    constructor(draw: Draw);
    setList(listType: ListType | null, listStyle?: ListStyle, iconPaddingLeft?: number, iconSize?: number): void;
    unsetList(): void;
    computeListStyle(ctx: CanvasRenderingContext2D, elementList: IElement[]): Map<string, number>;
    getListStyleWidth(ctx: CanvasRenderingContext2D, listElementList: IElement[]): number;
    drawListStyle(ctx: CanvasRenderingContext2D, row: IRow, position: IElementPosition): void;
}
