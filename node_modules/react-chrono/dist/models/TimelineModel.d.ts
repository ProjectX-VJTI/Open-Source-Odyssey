/// <reference types="react" />
import { Theme } from './Theme';
import { TimelineItemModel } from './TimelineItemModel';
export type TextDensity = 'LOW' | 'HIGH';
/**
 * model internally used by the component
 *
 * @export
 * @interface TimelineModel
 * @extends {TimelineProps}
 */
export type TimelineModel = Pick<TimelineProps, 'items' | 'onItemSelected' | 'onRestartSlideshow' | 'theme' | 'slideShow' | 'onScrollEnd' | 'mode' | 'timelinePointDimension' | 'nestedCardHeight' | 'noUniqueId' | 'uniqueId'> & {
    activeTimelineItem?: number;
    contentDetailsChildren?: React.ReactNode | React.ReactNode[];
    iconChildren?: React.ReactNode | React.ReactNode[];
    isChild?: boolean;
    onFirst?: () => void;
    onLast?: () => void;
    onNext?: () => void;
    onOutlineSelection?: (index: number) => void;
    onPaused?: () => void;
    onPrevious?: () => void;
    onTimelineUpdated?: (id: number) => void;
    slideItemDuration?: number;
    slideShowEnabled?: boolean;
    slideShowRunning?: boolean;
};
type Option = {
    helpText?: string;
    text: string;
};
type ChangeDensityOptions = {
    high?: Option;
    low?: Option;
};
type ChangeLayoutOptions = {
    alternating?: Option;
    horizontal?: Option;
    horizontal_all?: Option;
    vertical?: Option;
};
export type ButtonTexts = {
    changeDensity?: string;
    changeDensityOptions?: ChangeDensityOptions;
    changeLayout?: string;
    changeLayoutOptions?: ChangeLayoutOptions;
    dark?: string;
    first: string;
    jumpTo?: string;
    last: string;
    light?: string;
    next?: string;
    play?: string;
    previous?: string;
    stop?: string;
};
/**
 * Main props used by the host app.
 *
 * @export
 * @interface TimelineProps
 */
export type TimelineProps = {
    activeItemIndex?: number;
    allowDynamicUpdate?: boolean;
    borderLessCards?: boolean;
    buttonTexts?: ButtonTexts;
    cardHeight?: number;
    cardLess?: boolean;
    cardPositionHorizontal?: 'TOP' | 'BOTTOM';
    cardWidth?: number;
    children?: React.ReactElement | React.ReactElement[];
    classNames?: {
        card?: string;
        cardMedia?: string;
        cardSubTitle?: string;
        cardText?: string;
        cardTitle?: string;
        controls?: string;
        title?: string;
    };
    contentDetailsHeight?: number;
    darkMode?: boolean;
    disableAutoScrollOnClick?: boolean;
    disableClickOnCircle?: boolean;
    disableInteraction?: boolean;
    disableNavOnKey?: boolean;
    disableTimelinePoint?: boolean;
    disableToolbar?: boolean;
    enableBreakPoint?: boolean;
    enableDarkToggle?: boolean;
    enableLayoutSwitch?: boolean;
    enableQuickJump?: boolean;
    flipLayout?: boolean;
    focusActiveItemOnLoad?: boolean;
    fontSizes?: {
        cardSubtitle?: string;
        cardText?: string;
        cardTitle?: string;
        title?: string;
    };
    highlightCardsOnHover?: boolean;
    itemWidth?: number;
    items?: TimelineItemModel[];
    lineWidth?: number;
    mediaHeight?: number;
    mediaSettings?: {
        align?: 'left' | 'right' | 'center';
        imageFit?: 'cover' | 'contain' | 'fill' | 'none';
    };
    mode?: TimelineMode;
    nestedCardHeight?: number;
    noUniqueId?: boolean;
    onItemSelected?: (data: Pick<TimelineItemModel, 'title' | 'cardDetailedText' | 'cardSubtitle' | 'cardTitle'> & {
        index: number;
    }) => void;
    onRestartSlideshow?: () => void;
    onScrollEnd?: () => void;
    onThemeChange?: () => void;
    parseDetailsAsHTML?: boolean;
    responsiveBreakPoint?: number;
    scrollable?: boolean | {
        scrollbar: boolean;
    };
    showAllCardsHorizontal?: boolean;
    showProgressOnSlideshow?: boolean;
    slideItemDuration?: number;
    slideShow?: boolean;
    slideShowType?: SlideShowType;
    textDensity?: TextDensity;
    textOverlay?: boolean;
    theme?: Theme;
    timelinePointDimension?: number;
    timelinePointShape?: 'circle' | 'square' | 'diamond';
    title?: string;
    titleDateFormat?: string;
    toolbarPosition?: 'top' | 'bottom';
    uniqueId?: string;
    useReadMore?: boolean;
};
export type SlideShowType = 'reveal' | 'slide_in' | 'slide_from_sides';
export type TimelineMode = 'VERTICAL' | 'HORIZONTAL' | 'VERTICAL_ALTERNATING' | 'HORIZONTAL_ALL';
export {};
