import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProgressBar from '../components/ProgressBar';
import PageBanner from '../components/PageBanner';
import { Text } from 'components';

storiesOf('ProgressBar', module).add('with Edit Profile', () => (
  <div>
    <Text type="H3">Edit Profile Progress Bar</Text>
    <br />
    <br />
    <ProgressBar mainHeading="Profile Stength" percentage={60} />
    <br />
    <br />
    <Text type="H3">Edit Profile Progress Bar using Profile PageBanner</Text>
    <br />
    <br />
    <PageBanner
      editHeading="Profile"
      onEdit={action('Edit Profile Clicked')}
      onClose={action('Close Clicked')}
    >
      <ProgressBar mainHeading="Profile Stength" percentage={60} />
    </PageBanner>
    <br />
    <br />
  </div>
));
