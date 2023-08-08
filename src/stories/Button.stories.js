import { storiesOf } from '@storybook/react';
import React from 'react';

import Button from '../components/Button/index.tsx';

storiesOf('Button', module)
  .add('with text', () => <Button>Hello Storybook</Button>);
