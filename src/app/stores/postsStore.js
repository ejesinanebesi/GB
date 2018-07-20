import {EventEmitter} from 'events';
import * as constantsPosts from '../constants/postsConstants';
import dispatcher from "../dispatcher";

class PostsStore extends EventEmitter
{
    constructor () {
        super(...arguments);

        this.posts = [];

        this.getPostsData = this.getPostsData.bind(this);
        this.change = this.change.bind(this);
        this.addPost = this.addPost.bind(this);
        this.handleActions = this.handleActions.bind(this);

    }

    getPostsData(posts)
    {
        this.posts = posts;
        this.change();
    }

    change(){
        this.emit('change', this.posts);
    }

    addPost(post)
    {
        this.posts.push(post);
        this.change();
    }

    //сюда в ACtion приходят экшны из диспатчера;
    handleActions(action) {
        switch (action.type)
        {
            case constantsPosts.ADD_POST: {
                this.addPost(action.payload);
                break;
            }
            case constantsPosts.GET_POSTS: {
                this.getPostsData(action.payload);
                break;
            }
        }
    }
}

const postStoreObj = new PostsStore;
dispatcher.register(postStoreObj.handleActions);
export default postStoreObj;