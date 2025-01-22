import { FunctionComponent, ReactNode } from 'react';
import { Theme } from '@models/Theme';
export type ToolbarItem = {
    icon?: ReactNode;
    id?: string;
    label?: string;
    name: string;
    onSelect: (id: string, name: string) => void;
};
export type ToolbarProps = {
    children?: ReactNode | ReactNode[];
    items?: ToolbarItem[];
    theme: Theme;
};
declare const Toolbar: FunctionComponent<ToolbarProps>;
export { Toolbar };
