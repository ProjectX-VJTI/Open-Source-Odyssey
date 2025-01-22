/// <reference types="react" />
import { Theme } from '@models/Theme';
import { TimelineMode } from '@models/TimelineModel';
export declare const TimelineNavWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {
    theme?: Theme;
}>>;
export declare const TimelineNavItem: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {
    $disable?: boolean;
}>>;
export declare const TimelineNavButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    mode?: TimelineMode;
    rotate?: 'TRUE' | 'FALSE';
    theme?: Theme;
}>>;
export declare const TimelineControlContainer: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const ControlButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    theme?: Theme;
}>>;
export declare const MediaToggle: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<Omit<import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "theme"> & {
    theme?: Theme;
}, "ref"> & {
    ref?: import("react").Ref<HTMLButtonElement>;
}, never>> & Omit<import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    theme?: Theme;
}>>, keyof import("react").Component<any, {}, any>>;
export declare const ReplayWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<Omit<import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "theme"> & {
    theme?: Theme;
}, "ref"> & {
    ref?: import("react").Ref<HTMLButtonElement>;
}, never>> & Omit<import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    theme?: Theme;
}>>, keyof import("react").Component<any, {}, any>>;
