import { RefObject } from 'react';
declare const useSlideshow: (ref: RefObject<HTMLElement>, active: boolean, slideShowActive: boolean, slideItemDuration: number, id: string, onElapsed?: (id: string) => void) => {
    paused: boolean;
    remainInterval: number;
    setStartWidth: import("react").Dispatch<import("react").SetStateAction<number>>;
    setupTimer: (interval: number) => void;
    startWidth: number;
    tryPause: () => void;
    tryResume: () => void;
};
export { useSlideshow };
