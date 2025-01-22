import { ReactNode } from 'react';
import { Theme } from './Theme';
import { Scroll } from './TimelineHorizontalModel';
import { Media } from './TimelineMediaModel';
import { TimelineProps } from './TimelineModel';
/**
 * Represents the model for a timeline item.
 */
export interface TimelineItemModel {
    _dayjs?: any;
    active?: boolean;
    cardDetailedText?: string | string[];
    cardSubtitle?: string;
    cardTitle?: string;
    content?: ReactNode | ReactNode[];
    date?: number | string | Date;
    id?: string;
    isNested?: boolean;
    items?: TimelineItemModel[];
    media?: Media;
    position?: string;
    timelineContent?: ReactNode;
    title?: string;
    url?: string;
    visible?: boolean;
}
/**
 * Represents the model for a timeline card.
 */
export type TimelineCardModel = Pick<TimelineItemModel, 'id' | 'visible' | 'title' | 'active' | 'cardDetailedText' | 'cardSubtitle' | 'cardTitle' | 'media' | 'url' | 'timelineContent' | 'isNested' | 'items'> & {
    autoScroll?: ({ pointOffset, pointWidth, timelinePointHeight, contentHeight, }: Partial<Scroll>) => void;
    customContent?: React.ReactNode | React.ReactNode[];
    hasFocus?: boolean;
    iconChild?: React.ReactNode;
    onClick?: (id?: string) => void;
    onElapsed?: (id?: string) => void;
    slideItemDuration?: number;
    slideShowRunning?: boolean;
    theme?: Theme;
    wrapperId: string;
} & Pick<TimelineProps, 'cardHeight' | 'cardWidth' | 'nestedCardHeight'>;
