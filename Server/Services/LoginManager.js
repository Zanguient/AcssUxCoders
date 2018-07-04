//'use strict';

const LoginRepository = require('../DataAccess/LoginRepository');
const assert = require('assert');
const loginRepository = new LoginRepository();

const loginResponse = (note) => {
    assert(note, 'Note is required');

    return{ 
    id: note._id, 
    candidateId: note.candidateId, 
    candidateName: note.candidateName, 
    candidateAge: note.candidateAge, 
    TotalExperience: note.TotalExperience, 
    skillset: note.skillset, 
    contactNo: note.contactNo
    }
};
const createuserDetails = () => {
     return{ 
    id: '', 
    candidateId: '', 
    candidateName: '', 
    candidateAge: '', 
    TotalExperience: '', 
    skillset: '', 
    contactNo: ''
    }
};
class LoginManager {    

    login(candidateId) {

        //assert(title, 'Title is required');
        assert(candidateId, 'candidateId is required');
        
        const userDetails = createuserDetails();

        return new Promise((resolve, reject) => {
            loginRepository
                .getUserById(candidateId)
                .then(userDetails => resolve(loginResponse(userDetails)))
                .catch(error => reject(error));
        });
    }


    // findNoteById(id) {
        
    //     assert(id, 'Id is required');
        
    //     return new Promise((resolve, reject) => {
    //         noteRepository
    //             .findNoteById(id)
    //             .then(note => resolve(mapToNoteDto(note)))
    //             .catch(error => reject(error));
    //     });
    // }


    // findNotesByTag(tag) {
        
    //     assert(tag, 'Tag is required');

    //     return new Promise((resolve, reject) => {
    //         noteRepository
    //             .findNotesByTag(tag)
    //             .then(notes => resolve(notes.map(note => mapToNoteDto(note))))
    //             .catch(error => reject(error));
    //     });
    // }


    // findNotesByTitle(title) {
        
    //     assert(title, 'Title is required');

    //     return new Promise((resolve, reject) => {
    //         noteRepository
    //             .findNotesByTitle(title)
    //             .then(notes => resolve(notes.map(note => mapToNoteDto(note))))
    //             .catch(error => reject(error));
    //     });
    // }


    // listNotes() {
    //     return new Promise((resolve, reject) => {
    //         noteRepository
    //             .listNotes()
    //             .then(notes => resolve(notes.map(note => mapToNoteDto(note))))
    //             .catch(error => reject(error));
    //     });
    // }


    // removeNote(id) {

    //     assert(id, 'Id is required');

    //     return new Promise((resolve, reject) => {
    //         noteRepository
    //             .removeNote(id)
    //             .then(() => resolve())
    //             .catch(error => reject(error));
    //     });
    // }


    // tagNote(id, tags) {
        
    //     assert(id, 'Id is required');
    //     assert(tags, 'Tags are required');

    //     var exp = new RegExp(/^([\w]+[,]?)*$/);
    //     assert(exp.test(tags), 'Invalid list of tags specified');

    //     const uniqueTags = tags ? Array.from(new Set(tags.split(',').map(tag => tag.toLowerCase()))) : [];

    //     return new Promise((resolve, reject) => {
    //         noteRepository
    //             .tagNote(id, uniqueTags)
    //             .then(() => resolve())
    //             .catch(error => reject(error));
    //     });
    // }


    // updateNote(id, title, content, tags) {
    //     assert(id, 'Id is required');
    //     assert(title, 'Title is required');
    //     assert(content, 'Content is required');
        
    //     const note = createUpdatedNote(title, content, tags);

    //     return new Promise((resolve, reject) => {
    //         noteRepository
    //             .updateNote(id, note)
    //             .then(() => resolve())
    //             .catch(error => reject(error));
    //     });        
    // }
}

module.exports = LoginManager;