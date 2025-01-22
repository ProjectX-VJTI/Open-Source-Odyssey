import { ForwardRefExoticComponent, ReactNode } from 'react';
import { Theme } from './Theme';
import { TextOrContentModel } from '../components/timeline-elements/timeline-card-content/text-or-content';
/**
 * Represents the type of media (video or image).
 */
export type MediaType = 'VIDEO' | 'IMAGE';
/**
 * Represents the source of a media element.
 */
export interface MediaSource {
    type?: string;
    url: string;
}
/**
 * Represents the model for media content.
 */
export interface Media {
    name?: string;
    source: MediaSource;
    type: MediaType;
}
/**
 * Represents the state of media playback.
 */
export interface MediaState {
    id?: string;
    paused?: boolean;
    playing?: boolean;
}
/**
 * Represents the model for media within a card.
 */
export interface CardMediaModel {
    active?: boolean;
    cardHeight?: number;
    content?: string | ReactNode;
    detailsText?: ForwardRefExoticComponent<TextOrContentModel>;
    hideMedia: boolean;
    id?: string;
    media: Media;
    onMediaStateChange: (state: MediaState) => void;
    paused?: boolean;
    progressRef?: React.RefObject<HTMLProgressElement>;
    remainInterval?: number;
    resuming?: boolean;
    showProgressBar?: boolean;
    slideshowActive?: boolean;
    startWidth?: number;
    theme?: Theme;
    title?: string;
    triangleDir?: string;
    url?: string;
}
