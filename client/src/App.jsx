import React from 'react';
import PostCreate from './posts/PostCreate';
import PostList from './posts/PostList';
import EventEmitter from 'EventEmitter';

export default class App extends React.Component{

    constructor() {
        super();
        this.postCreatedEvenEmitter = new EventEmitter();
    }

    render() {
        return <div className="container">
            <h1>Create post</h1>
            <PostCreate postCreatedEvenEmitter = {this.postCreatedEvenEmitter}/>
            <hr/>
            <h1>Posts</h1>
            <PostList postCreatedEvenEmitter = {this.postCreatedEvenEmitter}/>
        </div>;
    }
}
