import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProgressBar from '../components/ProgressBar';
import PageBanner from '../containers/Profile/components/PageBanner';
import { Text } from 'components';

const info = {
  name: 'TestUser',
  organization: 'My Organization',
  languages: [],
  skills: ['programming', 'React'],
  email: null
};

const full_info = {
  name: 'TestUser',
  organization: 'My Organization',
  languages: ['English'],
  skills: ['programming', 'React'],
  email: 'testuser@storybook.com'
};

storiesOf('ProgressBar', module).add('with Edit Profile', () => (
  <div>
    <Text type="H3">Edit Profile Progress Bar</Text>
    <br />
    <br />
    <ProgressBar
      mainHeading="Profile Stength"
      editHeading="Profile"
      onEdit={action('Edit Profile Clicked')}
      onClose={action('Close Clicked')}
      percentage={60}
    />
    <br />
    <br />
    <Text type="H3">Edit Profile Progress Bar using Profile PageBanner</Text>
    <br />
    <br />
    <PageBanner
      info={info}
      mainHeading="Profile Stength"
      editHeading="Profile"
      onEdit={action('Edit Profile Clicked')}
      onClose={action('Close Clicked')}
      elsewhere={1}
    />
    <br />
    <br />
    <Text type="H3">
      Hidden Edit Profile Progress Bar using Profile PageBanner
    </Text>
    <br />
    <br />
    <PageBanner
      info={full_info}
      mainHeading="Profile Stength"
      editHeading="Profile"
      onEdit={action('Edit Profile Clicked')}
      onClose={action('Close Clicked')}
      elsewhere={1}
    />
  </div>
));
