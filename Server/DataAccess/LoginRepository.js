'use strict';

const ObjectID = require('mongodb').ObjectID;
const DbConnection = require('./DbConnection');

const collection = 'candidate_table';

const connect = () => new DbConnection('mongodb://admin:acss01@127.0.0.1:27017/config');

const filters = {
    id: (id) => {
        return { _id: new ObjectID(id) };
    },
    tag: (tag) => {
        return { tags: { $regex: new RegExp(tag, 'i') } };
    },
    title: (title) => {
        return { 'title': { $regex: new RegExp(title, 'i') } };
    },
    candidateId: (candidateId) => {
        return { 'candidateId': { $regex: new RegExp(candidateId, 'i') } };
    }
};

class LoginRepository {

    getUserById(candidateId) {
        const connection = connect();

        return new Promise((resolve, reject) => {
            connection
                .open()
                .then(() => {
                    connection.Db.collection(collection)
                        .findOne(filters.candidateId(candidateId))
                        .then(note => {
                            resolve(note);
                            connection.close();
                        })
                        .catch(error => {
                            reject(error);
                            connection.close();
                        });
                })
                .catch(error => {
                    reject(error);
                    connection.close();
                });
        });
    }


    
}

module.exports = LoginRepository;