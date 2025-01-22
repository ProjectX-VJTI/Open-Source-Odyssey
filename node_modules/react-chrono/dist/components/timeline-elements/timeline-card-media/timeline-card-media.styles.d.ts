/// <reference types="react" />
import { Theme } from '@models/Theme';
import { TimelineMode } from '@models/TimelineModel';
export declare const linearGradient: import("styled-components").RuleSet<object>;
export declare const MediaWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $active?: boolean;
    $cardHeight?: number;
    $slideShowActive?: boolean;
    $textOverlay?: boolean;
    align?: 'left' | 'right' | 'center';
    dir?: string;
    mode?: TimelineMode;
    theme?: Theme;
}>>;
export declare const CardImage: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, {
    $enableBorderRadius?: boolean;
    $visible?: boolean;
    dir?: string;
    fit?: string;
    mode?: TimelineMode;
}>>;
export declare const CardVideo: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, {
    height?: number;
}>>;
export declare const MediaDetailsWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $absolutePosition?: boolean;
    $borderLessCard?: boolean;
    $expandFull?: boolean;
    $expandable?: boolean;
    $gradientColor?: string | null;
    $showText?: boolean;
    $textInMedia?: boolean;
    mode?: TimelineMode;
    theme?: Theme;
}>>;
export declare const ErrorMessage: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>>;
export declare const IFrameVideo: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, never>>;
export declare const DetailsTextWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $expandFull?: boolean;
    $show?: boolean;
    background: string;
    theme?: Theme;
}>>;
export declare const CardMediaHeader: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const ImageWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    height?: number;
}>>;
