import { Theme } from './Theme';
/**
 * Represents the model for a title element.
 */
export interface TitleModel {
    active?: boolean;
    align?: 'left' | 'right';
    classString?: string;
    theme?: Theme;
    title?: string;
}
