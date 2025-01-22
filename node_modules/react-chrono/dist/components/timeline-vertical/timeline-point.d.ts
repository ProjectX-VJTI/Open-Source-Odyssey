import { TimelinePointModel } from '@models/TimelineVerticalModel';
import React from 'react';
/**
 * TimelinePoint
 * @property {string} className - The class name for the component.
 * @property {string} id - The id of the timeline point.
 * @property {() => void} onClick - Function to handle click event.
 * @property {boolean} active - Whether the timeline point is active.
 * @property {() => void} onActive - Function to handle active event.
 * @property {boolean} slideShowRunning - Whether the slideshow is running.
 * @property {React.ReactNode} iconChild - The icon child nodes.
 * @property {number} timelinePointDimension - The dimension of the timeline point.
 * @property {number} lineWidth - The width of the line.
 * @property {boolean} disableClickOnCircle - Whether the click on circle is disabled.
 * @property {boolean} cardLess - Whether the card is less.
 * @returns {JSX.Element} The TimelinePoint component.
 */
declare const TimelinePoint: React.FunctionComponent<TimelinePointModel>;
export { TimelinePoint };
