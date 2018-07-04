'use strict';

// package references
const express = require('express');

// app references
const LoginManager = require('../Services/LoginManager');

// initialization
const loginManager = new LoginManager();

// build router

const loginRouter = () => {
    const router = express.Router();

    router
        .post('/login', (request, response) => {

            const { candidateId } = request.params;

            if (!candidateId) {
                response.status(400).send('Id is required');
            } else {
                loginManager
                    .login(candidateId)
                    .then(note => response.json(note))
                    .catch(error => {
                        console.log(error.message);
                        response.status(500).send();
                    });
            }
        });
        
    return router;
};

module.exports = loginRouter;