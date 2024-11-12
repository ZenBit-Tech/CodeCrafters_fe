import { forwardRef } from 'react';

import TextInput, { TextInputProps } from '@/components/TextInput';

const TextInputWithRef = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => <TextInput {...props} inputRef={ref} />
);

TextInputWithRef.displayName = 'TextInputWithRef';

export default TextInputWithRef;
