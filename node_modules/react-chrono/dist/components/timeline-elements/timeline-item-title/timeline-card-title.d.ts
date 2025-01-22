import { TitleModel } from '@models/TimelineCardTitleModel';
import React from 'react';
/**
 * TimelineItemTitle component
 * This component renders the title of a timeline item and applies appropriate styling based on the given props.
 *
 * @property {string} title - The text of the title.
 * @property {boolean} active - Indicates whether the title is active or not.
 * @property {Theme} theme - The theme object, used for styling.
 * @property {string} align - The alignment of the title.
 * @property {string} classString - Additional CSS classes for the title.
 * @returns {JSX.Element} The TimelineItemTitle component.
 */
declare const TimelineItemTitle: React.FunctionComponent<TitleModel>;
export default TimelineItemTitle;
