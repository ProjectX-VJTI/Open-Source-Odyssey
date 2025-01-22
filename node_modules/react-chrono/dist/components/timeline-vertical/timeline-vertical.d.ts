import { TimelineVerticalModel } from '@models/TimelineVerticalModel';
import React from 'react';
/**
 * TimelineVertical
 * @property {boolean} alternateCards - Whether to alternate cards.
 * @property {() => void} autoScroll - Function to handle auto scroll.
 * @property {React.ReactNode} contentDetailsChildren - The content details children nodes.
 * @property {boolean} hasFocus - Whether the timeline has focus.
 * @property {React.ReactNode} iconChildren - The icon children nodes.
 * @property {Array} items - The items of the timeline.
 * @property {string} mode - The mode of the timeline.
 * @property {() => void} onClick - Function to handle click event.
 * @property {() => void} onElapsed - Function to handle elapsed event.
 * @property {() => void} onOutlineSelection - Function to handle outline selection.
 * @property {boolean} slideShowRunning - Whether the slideshow is running.
 * @property {Object} theme - The theme of the timeline.
 * @property {boolean} cardLess - Whether the card is less.
 * @property {number} nestedCardHeight - The height of the nested card.
 * @returns {JSX.Element} The TimelineVertical component.
 */
declare const TimelineVertical: React.FunctionComponent<TimelineVerticalModel>;
export default TimelineVertical;
