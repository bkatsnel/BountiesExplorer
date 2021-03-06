import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Select, Text } from 'components';

const options = [
  { value: 'React', label: 'React' },
  { value: 'Javascript', label: 'Javascript' },
  { value: 'CSS', label: 'CSS' }
];

storiesOf('Select', module).add('Select', () => (
  <div>
    <div style={{ width: '200px', marginLeft: '10px' }}>
      <div style={{ marginTop: '10px' }} />
      <Select
        label="Select a Category"
        onChange={e => console.log(e)}
        options={options}
        placeholder="Select one!"
      />
      <div style={{ marginTop: '10px' }} />
      <Text type="BodySmall">Disabled</Text>
      <div style={{ marginTop: '10px' }} />
      <Select
        label="Select a Category"
        disabled
        onChange={e => console.log(e)}
        options={options}
        placeholder="Select one!"
      />
      <div style={{ marginTop: '10px' }} />
      <Text type="BodySmall">Optional</Text>
      <div style={{ marginTop: '10px' }} />
      <Select
        label="Select a Category"
        optional
        onChange={e => console.log(e)}
        options={options}
        placeholder="Select one!"
      />
      <div style={{ marginTop: '10px' }} />
      <Text type="BodySmall">Error</Text>
      <div style={{ marginTop: '10px' }} />
      <Select
        label="Select a Category"
        error="Required"
        onChange={e => console.log(e)}
        options={options}
        placeholder="Select one!"
      />
    </div>
  </div>
));
