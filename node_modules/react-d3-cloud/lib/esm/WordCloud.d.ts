import React from 'react';
import cloud from 'd3-cloud';
import { BaseType, ValueFn } from 'd3-selection';
interface Datum {
    text: string;
    value: number;
}
export interface Word extends cloud.Word {
    text: string;
    value: number;
}
declare type WordCloudProps = {
    data: Datum[];
    width?: number;
    height?: number;
    font?: string | ((word: Word, index: number) => string);
    fontStyle?: string | ((word: Word, index: number) => string);
    fontWeight?: string | number | ((word: Word, index: number) => string | number);
    fontSize?: number | ((word: Word, index: number) => number);
    rotate?: number | ((word: Word, index: number) => number);
    spiral?: 'archimedean' | 'rectangular' | ((size: [number, number]) => (t: number) => [number, number]);
    padding?: number | ((word: Word, index: number) => number);
    random?: () => number;
    fill?: ValueFn<SVGTextElement, Word, string>;
    onWordClick?: (this: BaseType, event: any, d: Word) => void;
    onWordMouseOver?: (this: BaseType, event: any, d: Word) => void;
    onWordMouseOut?: (this: BaseType, event: any, d: Word) => void;
};
declare function WordCloud({ data, width, height, font, fontStyle, fontWeight, fontSize, rotate, spiral, padding, random, fill, onWordClick, onWordMouseOver, onWordMouseOut, }: WordCloudProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
declare const _default: React.MemoExoticComponent<typeof WordCloud>;
export default _default;
