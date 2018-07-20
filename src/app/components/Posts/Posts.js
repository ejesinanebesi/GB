import React from 'react';
import PostsStore from '../../stores/postsStore';
import {addPost, getPosts} from "../../actions/postsActions";
import PostList from "./PostList";

export default class Posts extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            posts: []
        };

        this.newPost = this.newPost.bind(this);
        this.onPostChange = this.onPostChange.bind(this);
    }
    render()
    {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.newPost}>Добавить новый пост</button>
                <PostList posts={this.state.posts} />
            </div>
        );
    }

    newPost (){
        let body = 'Новый пост';
        let userId = '1';
        let title = 'Название поста';
        addPost(title, userId, body);
    }

    onPostChange(posts)
    {
        this.setState({
            posts
        });
    }

    componentWillMount(){
        PostsStore.on('change', this.onPostChange)
    }

    componentWillUnmount(){
        PostsStore.removeEndEventListener('change', this.onPostChange);
    }

    componentDidMount(){
        getPosts(); //поулчаем посты Action
    }

}