import { TimelineContentModel } from '@models/TimelineContentModel';
import { ForwardRefExoticComponent } from 'react';
export type TextOrContentModel = Pick<TimelineContentModel, 'timelineContent' | 'theme' | 'detailedText'> & {
    showMore?: boolean;
};
declare const getTextOrContent: (p: TextOrContentModel) => ForwardRefExoticComponent<TextOrContentModel>;
export { getTextOrContent };
