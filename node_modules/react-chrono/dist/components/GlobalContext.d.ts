import { TimelineProps as PropsModel, TextDensity } from '@models/TimelineModel';
import { FunctionComponent } from 'react';
export type ContextProps = PropsModel & {
    isMobile?: boolean;
    toggleDarkMode?: () => void;
    updateHorizontalAllCards?: (state: boolean) => void;
    updateTextContentDensity?: (value: TextDensity) => void;
};
declare const GlobalContext: import("react").Context<ContextProps>;
declare const GlobalContextProvider: FunctionComponent<ContextProps>;
export default GlobalContextProvider;
export { GlobalContext };
