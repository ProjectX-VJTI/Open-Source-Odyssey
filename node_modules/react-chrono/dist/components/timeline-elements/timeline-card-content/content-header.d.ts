import { FunctionComponent } from 'react';
import { ContentHeaderProps } from './header-footer.model';
/**
 * ContentHeader component
 * This component renders the header of the timeline card including the title and subtitle.
 * It doesn't render the title and subtitle if the card has media.
 * The title and subtitle are memoized to prevent unnecessary re-renders.
 *
 * @property {string} title - The title of the card.
 * @property {string} url - The URL of the card.
 * @property {boolean} media - Indicates whether the card has media or not.
 * @property {string} content - The main content of the card.
 * @returns {JSX.Element} The ContentHeader component.
 */
declare const ContentHeader: FunctionComponent<ContentHeaderProps>;
export { ContentHeader };
