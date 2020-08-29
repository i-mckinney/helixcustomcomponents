
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

import { addDecorator } from '@storybook/react';

import StylesDecorator from './styles-decorator';

addDecorator(StylesDecorator);
