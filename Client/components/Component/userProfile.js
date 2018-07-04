import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';


class UserProfile extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        const  UserProfiledata = {
            id: '', 
            candidateId: '', 
            candidateName: '', 
            candidateAge: '', 
            TotalExperience: '', 
            skillset: '', 
            contactNo: ''
        };
        //if(this.props.UserProfiledata){
        //this.UserProfiledata = this.props.UserProfiledata;
        //}
    }
    render() {
        return (
            <div id="CarrerBanner">
                <h5 className="text-center">Your Profile Information....</h5>
                <ul className="style-type-none">
                    <li><span className="userProfileTitleList">Name: </span>{this.props.UserProfiledata.candidateName}</li>
                    <li><span className="userProfileTitleList">Candidate Age:  </span>{this.props.UserProfiledata.candidateAge}</li>
                    <li><span className="userProfileTitleList">Years Of Experience:  </span> {this.props.UserProfiledata.TotalExperience}</li>
                    <li><span className="userProfileTitleList">Skillset:  </span>{this.props.UserProfiledata.skillset}</li>
                    <li><span className="userProfileTitleList">Contact Number:  </span>{this.props.UserProfiledata.contactNo}</li>
                </ul>


            </div>
        );
    }
}
UserProfile.propTypes = {
    UserProfiledata: PropTypes.object
    // add .isRequired here if "params" is required
};

export default UserProfile;
