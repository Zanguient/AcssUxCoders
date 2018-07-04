'use strict';


// package references


import * as axios from 'axios';


// db options


const baseApiUrl = 'http://localhost:8000/api';


// add note

const login = (id = []) => {

    return new Promise((resolve, reject) => {
        axios
            .post(`${baseApiUrl}/notes/login`, {'candidateId': id})
            .then((result) => {
                resolve(result.data);
            })
            .catch(error => {
                console.log(error);
                reject(error.message);
            });

    });

};



// exports


module.exports = {
    'login': login,
};