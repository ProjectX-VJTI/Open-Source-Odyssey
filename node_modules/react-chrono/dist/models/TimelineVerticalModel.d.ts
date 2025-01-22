/// <reference types="react" />
import { Theme } from './Theme';
import { Scroll } from './TimelineHorizontalModel';
import { TimelineCardModel, TimelineItemModel } from './TimelineItemModel';
import { Media } from './TimelineMediaModel';
import { TimelineProps } from './TimelineModel';
/**
 * Represents the props for the timeline component.
 */
export type Props = Pick<TimelineProps, 'flipLayout' | 'theme' | 'mode' | 'timelinePointDimension' | 'lineWidth' | 'cardHeight' | 'disableClickOnCircle' | 'cardLess' | 'nestedCardHeight'> & {
    alternateCards?: boolean;
    hasFocus?: boolean;
    onClick: (id?: string) => void;
    onElapsed?: (id?: string) => void;
    slideItemDuration?: number;
    slideShowRunning?: boolean;
    theme?: Theme;
};
type VerticalModel = Pick<Props, 'alternateCards' | 'hasFocus' | 'onClick' | 'onElapsed' | 'slideShowRunning' | 'mode' | 'timelinePointDimension' | 'lineWidth' | 'disableClickOnCircle' | 'cardLess' | 'nestedCardHeight'> & Pick<TimelineItemModel, 'cardDetailedText' | 'cardSubtitle' | 'cardTitle' | 'title' | 'url' | 'timelineContent' | 'items' | 'isNested'> & {
    active?: boolean;
    className: string;
    id?: string;
};
/**
 * Represents the model for a vertical timeline point.
 */
export type TimelinePointModel = Omit<VerticalModel, 'timelineContent'> & {
    iconChild?: React.ReactNode;
    isMobile?: boolean;
    onActive: (pointOffset: number) => void;
};
/**
 * Represents the model for a vertical timeline item.
 */
export interface VerticalItemModel extends VerticalModel {
    contentDetailsChildren?: React.ReactNode;
    iconChild?: React.ReactNode;
    index: number;
    items?: TimelineItemModel[];
    media?: Media;
    onActive: (pointOffset: number, contentHeight: number, contentOffset: number) => void;
    onShowMore?: () => void;
    visible?: boolean;
}
/**
 * Represents the model for a vertical timeline.
 */
export type TimelineVerticalModel = Pick<Props, 'alternateCards' | 'mode' | 'onClick' | 'onElapsed' | 'slideShowRunning' | 'theme' | 'hasFocus' | 'cardLess' | 'nestedCardHeight'> & {
    activeTimelineItem?: number;
    autoScroll: (s: Partial<Scroll>) => void;
    childrenNode?: React.ReactNode;
    contentDetailsChildren?: React.ReactNode;
    iconChildren?: React.ReactNode;
    items: TimelineCardModel[];
    onOutlineSelection?: (index: number) => void;
};
export {};
