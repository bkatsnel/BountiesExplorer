import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PageBanner from '../components/PageBanner';
import ProgressBar from '../components/ProgressBar';
import { Text } from 'components';

storiesOf('PageBanner', module).add('with ProgressBar', () => (
  <div>
    <Text type="H3">PageBanner With ProgressBar</Text>
    <br />
    <br />
    <PageBanner
      editHeading="Profile"
      onEdit={action('Edit Profile Clicked')}
      onClose={action('Close Clicked')}
    >
      <ProgressBar mainHeading="Profile Strength" percentage={75} />
    </PageBanner>
  </div>
));
