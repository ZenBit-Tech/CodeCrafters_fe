import { forwardRef } from 'react';

import TextInput, { TextInputProps } from '@/components/TextInput';
// Add ref to prevent ref-related error.
const TextInputWithRef = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => <TextInput {...props} inputRef={ref} />
);

TextInputWithRef.displayName = 'TextInputWithRef';

export default TextInputWithRef;
