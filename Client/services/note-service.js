'use strict';


// package references


import * as axios from 'axios';


// db options


const baseApiUrl = 'http://localhost:8000/api';


// add note

const applyJob = (candidate_Data, job_details = []) => {

    return new Promise((resolve, reject) => {
        axios
            .post(`${baseApiUrl}/notes/applyJob`, { 
                job_id : job_details.job_id, 
                candidate_Id : candidate_Data.candidate_Id, 
                candidate_Name : candidate_Data.candidate_Name, 
                Interview_date : job_details.interviewDate, 
                role : job_details.role, 
                R1Status : 'Pending', 
                R1Feedback : '', 
                R2Status : 'Pending', 
                R2Feedback : '', 
                R3Status : 'Pending', 
                R3Feedback : ''
            })
            .then((result) => {
                resolve(result.data);
            })
            .catch(error => {
                console.log(error);
                reject(error.message);
            });

    });

};


// find notes


const findNote = (id) => {
    
    return new Promise((resolve, reject) => {
        axios
            .get(`${baseApiUrl}/notes/${id}`)
            .then(response => {
                resolve(response.data);
                return;
            })
            .catch(error => {
                reject(error.message);
                return;
            });
    });
    
};


const findNotesByTitle = (title) => {

    return new Promise((resolve, reject) => {
        axios
            .get(`${baseApiUrl}/notes?title=${title}`)
            .then(response => {
                resolve(response.data);
                return;
            })
            .catch(error => {
                reject(error.message);
                return;
            });
    });

};

const listNotes = () => {

    return new Promise((resolve, reject) => {
        axios
            .get(`${baseApiUrl}/notes`)
            .then(response => {
                resolve(response.data);
                return;
            })
            .catch(error => {
                reject(error.message);
                return;
            });
    });

};


// remove note


const removeNote = (id) => {

    return new Promise((resolve, reject) => {
        axios
            .delete(`${baseApiUrl}/notes/${id}`)
            .then(() => {
                resolve();
                return;
            })
            .catch(error => {
                reject(error.message);
                return;
            });
    });

};


// update note


const updateNote = (note) => {
    return new Promise((resolve, reject) => {
        axios
            .put(`${baseApiUrl}/notes`, {note})
            .then(() => {
                resolve();
                return;
            })
            .catch(error => {
                reject(error.message);
                return;
            });
    });
    
};


// exports


module.exports = {
    'applyJob': applyJob,
    'findNote': findNote,
    'findNotesByTitle': findNotesByTitle,
    'listNotes': listNotes,
    'removeNote': removeNote,
    'updateNote': updateNote
};