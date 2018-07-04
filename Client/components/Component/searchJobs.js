import React, { Component } from 'react';
import '../App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';

const NoteService = require('../../services/note-service');


class SearchJobs extends Component {
    constructor(props) {
        super(props);
        console.log('User Profile Data in  Search JOBS',this.props);
        const  UserProfiledata = {
            id: '', 
            candidateId: '', 
            candidateName: '', 
            candidateAge: '', 
            TotalExperience: '', 
            skillset: '', 
            contactNo: ''
        };
        const me = this;
        this.state = {
            data:[]
        };
		
        NoteService
            .listNotes()
            .then(res => {
                console.log(res);
                //me.setState({data: res});
                me.setState({data:res});
                console.log(me.state);
                return;
            })
            .catch(error => {
                console.log(error);
                return;
            });
        
        this.columns = [{
            Header: 'Job Code',
            accessor: 'job_id' // String-based value accessors!
        }, {
            Header: 'Job Description',
            accessor: 'job_desc'
        }, {
            Header: 'Role',
            accessor:'role' // Custom value accessors!
        },{
            Header: 'Experience',
            accessor:'experience' // Custom value accessors!
        },{
            Header: 'Posted Date',
            accessor: 'postedDate'
        },{
            Header: 'Interview Date',
            accessor: 'interviewDate'
        },{
            Header: 'No Of Openings',
            accessor: 'openings'
        },{
            Header: 'Location',
            accessor: 'location'
        },{
            header: '',
            id: 'apply_button',
            Cell: ({job_id}) => (<button onClick={(job_id)=>{console.log('clicked value', job_id);}}>Apply</button>)
        }
            //  {
            //   Header: props => <span>Applied On</span>, // Custom header components!
            //   accessor: 'reportingManager.age'
            // }
        ];
    }
    applyJob(job_id){

    }
	
    render() {
        return (
            <div id="CarrerBanner">
                <h3>We have Below Openings.</h3>
                <ReactTable data={this.state.data} columns={this.columns} minRows="5"/>
            </div>
        );
    }
}
SearchJobs.propTypes = {
    UserProfiledata: PropTypes.object
    // add .isRequired here if "params" is required
};
export default SearchJobs;