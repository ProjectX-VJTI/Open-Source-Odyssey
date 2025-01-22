import { VerticalItemModel } from '@models/TimelineVerticalModel';
import React from 'react';
/**
 * VerticalItem
 * @property {boolean} active - Whether the vertical item is active.
 * @property {boolean} alternateCards - Whether to alternate cards.
 * @property {string} cardDetailedText - The detailed text of the card.
 * @property {string} cardSubtitle - The subtitle of the card.
 * @property {string} cardTitle - The title of the card.
 * @property {string} url - The URL of the card.
 * @property {string} className - The class name for the component.
 * @property {React.ReactNode} contentDetailsChildren - The content details children nodes.
 * @property {React.ReactNode} iconChild - The icon child nodes.
 * @property {boolean} hasFocus - Whether the vertical item has focus.
 * @property {string} id - The id of the vertical item.
 * @property {React.ReactNode} media - The media nodes.
 * @property {() => void} onActive - Function to handle active event.
 * @property {() => void} onClick - Function to handle click event.
 * @property {() => void} onElapsed - Function to handle elapsed event.
 * @property {boolean} slideShowRunning - Whether the slideshow is running.
 * @property {string} title - The title of the vertical item.
 * @property {boolean} visible - Whether the vertical item is visible.
 * @property {React.ReactNode} timelineContent - The timeline content nodes.
 * @property {Array} items - The items of the vertical item.
 * @property {boolean} isNested - Whether the vertical item is nested.
 * @property {number} nestedCardHeight - The height of the nested card.
 * @returns {JSX.Element} The VerticalItem component.
 */
declare const VerticalItem: React.FunctionComponent<VerticalItemModel>;
export default VerticalItem;
