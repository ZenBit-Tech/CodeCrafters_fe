import { Meta } from '@storybook/react';
import 'normalize.css';
declare const _default: Meta;
export default _default;
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, {
    id: number;
    isChecked: boolean;
    toggleCheckbox: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}>;
