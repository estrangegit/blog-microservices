import React from 'react';
import PostCreate from './posts/PostCreate';
import PostList from './posts/PostList';

export default class App extends React.Component{
    render() {
        return <div className="container">
            <h1>Create post</h1>
            <PostCreate/>
            <hr/>
            <h1>Posts</h1>
            <PostList/>
        </div>;
    }
}
