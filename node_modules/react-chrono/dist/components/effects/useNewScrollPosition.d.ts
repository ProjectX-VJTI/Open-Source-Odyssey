import { Scroll } from '@models/TimelineHorizontalModel';
import { TimelineMode } from '@models/TimelineModel';
/**
 * Hook to calculate the new scroll position based on the given mode and item width.
 *
 * @param {TimelineMode} mode - The mode of the timeline (HORIZONTAL, VERTICAL, or VERTICAL_ALTERNATING).
 * @param {number} [itemWidth] - Optional item width for horizontal mode.
 * @returns {[number, (e: HTMLElement, s: Partial<Scroll>) => void]} - The new offset and a function to compute the new offset.
 */
declare const useNewScrollPosition: (mode: TimelineMode, itemWidth?: number) => [number, (e: HTMLElement, s: Partial<Scroll>) => void];
export default useNewScrollPosition;
