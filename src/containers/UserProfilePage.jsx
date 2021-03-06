import React from 'react';
import { connect } from 'react-redux'

import UserProfile from '../components/UserProfile';

class UserProfilePage extends React.Component {

    render() {
        const pilotProfileId = localStorage.getItem('pilotProfileId');
        const individualOperatorProfileId = localStorage.getItem('individualOperatorProfileId');
        const organizationOperatorProfileId = localStorage.getItem('organizationOperatorProfileId');
        const manufacturerProfileId = localStorage.getItem('manufacturerProfileId');

        return <UserProfile
                    pilotProfileId={pilotProfileId}
                    individualOperatorProfileId={individualOperatorProfileId}
                    organizationOperatorProfileId={organizationOperatorProfileId}
                    manufacturerProfileId={manufacturerProfileId}
               />
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
  mapStateToProps
)(UserProfilePage)