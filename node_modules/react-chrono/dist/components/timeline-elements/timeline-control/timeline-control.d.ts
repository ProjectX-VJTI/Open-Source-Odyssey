import { TimelineControlModel } from '@models/TimelineControlModel';
import React from 'react';
/**
 * TimelineControl component
 * Provides navigation controls for a timeline, including next, previous, first, last, and slideshow buttons.
 * Optionally supports flipping the layout and dark mode toggle.
 *
 * @property {function} onNext - Function to go to the next item.
 * @property {function} onPrevious - Function to go to the previous item.
 * @property {function} onFirst - Function to jump to the first item.
 * @property {function} onLast - Function to jump to the last item.
 * @property {boolean} disableLeft - Whether to disable the left navigation buttons.
 * @property {boolean} disableRight - Whether to disable the right navigation buttons.
 * @property {boolean} slideShowRunning - Whether the slideshow is currently running.
 * @property {function} onReplay - Function to restart the slideshow.
 * @property {boolean} slideShowEnabled - Whether the slideshow feature is enabled.
 * @property {function} onToggleDarkMode - Function to toggle dark mode (if enabled).
 * @property {boolean} isDark - Whether dark mode is currently active.
 * @property {function} onPaused - Function to pause the slideshow (if running).
 * @returns {JSX.Element} The TimelineControl component.
 */
declare const Controls: React.FunctionComponent<TimelineControlModel>;
export default Controls;
