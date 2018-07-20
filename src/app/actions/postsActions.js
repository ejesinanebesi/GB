import dispatcher from '../dispatcher';
import {ADD_POST, GET_POSTS} from '../constants/postsConstants';
import axios from 'axios';

export function addPost (title, userId, body) {
    const post = {title, userId, body};

    dispatcher.dispatch({
        type: ADD_POST,
        payload: post
    });
}

export function getPosts() {

    axios.get('http://localhost:3000/json/Bloq.json')
    //axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            dispatcher.dispatch({
                type: GET_POSTS,
                payload: response.data
            });
        });
}