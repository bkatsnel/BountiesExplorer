import React from 'react';
import styles from './ProfileDetails.module.scss';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Loader } from 'components';
import {
  About,
  Elsewhere,
  NetworkStats,
  PageBanner,
  ProfileAvatar,
  ProfileTabs,
  Skills
} from './components';

import {
  userInfoSelector,
  loadedUserInfoSelector,
  loadedUserSelector,
  loadedUserStatsSelector
} from 'public-modules/UserInfo/selectors';
import { ipfsToHttp } from 'utils/helpers';
import { profileUISelector } from './selectors';
import { actions } from './reducer';

const ProfileDetailsComponent = props => {
  const {
    loading,
    user,
    userStats,
    loadedUserInfo,
    switchValue,
    toggleNetworkSwitch,
    currentTab,
    setActiveTab,
    setReviewsModalVisible,
    onEdit,
    onCloseProgressBar,
    showBanner
  } = props;

  let bodyClass;

  let userMinRequiredInfo = {
    name: user.name,
    organization: user.organization,
    languages: user.languages,
    skills: user.skills,
    email: user.email
  };

  let userElsewhereInfo = {
    github: user.github,
    linkedin: user.linkedin,
    twitter: user.twitter,
    website: user.website
  };

  let userElsewhereValues = Object.values(userElsewhereInfo).filter(
    value => value
  ).length;

  let pageBanner = (
    <React.Fragment>
      <PageBanner
        info={userMinRequiredInfo}
        onEdit={onEdit}
        onClose={onCloseProgressBar}
        elsewhere={userElsewhereValues >= 0 ? userElsewhereValues : undefined}
        mainHeading="Profile Strength"
        editHeading="Profile"
      />
    </React.Fragment>
  );

  let body = (
    <React.Fragment>
      <ProfileAvatar
        name={user.name}
        address={user.public_address}
        img={
          user.is_profile_image_dirty
            ? ipfsToHttp(user.profileDirectoryHash, user.profileFileName)
            : user.profile_image
        }
        className={styles.profileAvatar}
      />
      <div className={styles.details}>
        <div className={`${styles.detailsSection} ${styles.detailsStats}`}>
          <NetworkStats
            stats={userStats}
            switchValue={switchValue}
            toggleNetworkSwitch={toggleNetworkSwitch}
            address={user.public_address}
            setReviewsModalVisible={setReviewsModalVisible}
          />
        </div>
        {!!user.skills &&
          !!user.skills.length && (
            <div className={`${styles.detailsSection} ${styles.detailsSkills}`}>
              <Skills skills={user.skills} />
            </div>
          )}
        {(!!user.organization ||
          (user.languages && !!user.languages.length)) && (
          <div className={`${styles.detailsSection} ${styles.detailsAbout}`}>
            <About
              organization={user.organization}
              languages={user.languages}
            />
          </div>
        )}
        {(user.website || user.twitter || user.github || user.linkedin) && (
          <div
            className={`${styles.detailsSection} ${styles.detailsElsewhere}`}
          >
            <Elsewhere
              website={user.website}
              twitter={user.twitter}
              github={user.github}
              linkedin={user.linkedin}
            />
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-xs-12">
          <ProfileTabs
            currentTab={currentTab}
            setActiveTab={setActiveTab}
            issuedCount={loadedUserInfo.stats.total_bounties || 0}
            fulfilledCount={loadedUserInfo.stats.total_fulfillments || 0}
          />
        </div>
      </div>
    </React.Fragment>
  );

  if (loading) {
    bodyClass = styles.bodyLoading;
    body = <Loader color="blue" size="medium" />;
  }

  return (
    <div>
      {showBanner && pageBanner}
      <div className={`col-xs-12 fullHeight ${bodyClass}`}>{body}</div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const userInfo = userInfoSelector(state);
  const loadedUserInfo = loadedUserInfoSelector(state);
  const loadedUser = loadedUserSelector(state);
  const profileUI = profileUISelector(state);
  const userStats = loadedUserStatsSelector(state);

  return {
    loading: userInfo.loading,
    user: loadedUser,
    userStats,
    switchValue: profileUI.switchValue,
    currentTab: profileUI.currentTab,
    loadedUserInfo,
    onEditProfile: props.onEditProfile
  };
};

const ProfileDetails = compose(
  connect(
    mapStateToProps,
    {
      toggleNetworkSwitch: actions.toggleNetworkSwitch,
      setActiveTab: actions.setActiveTab,
      setReviewsModalVisible: actions.setReviewsModalVisible
    }
  )
)(ProfileDetailsComponent);

export default ProfileDetails;
