import React from 'react';
import PostItem from './PostItem';
import axios from 'axios';
import EventEmitter from 'es-event-emitter';

export default class PostList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {posts: {}};
        this.fetchPosts = this.fetchPosts.bind(this);
        this.commentCreatedEvenEmitter = new EventEmitter();
    }

    componentDidMount() {
        this.fetchPosts();

        this.props.postCreatedEvenEmitter.on('new-post-created', () => {
            this.fetchPosts();
        })

        this.commentCreatedEvenEmitter.on('new-comment-created', () => {
            this.fetchPosts();
        })
    }

    fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts');
        this.setState({posts: res.data})
    }

    render() {
        const renderedPosts = Object.values(this.state.posts).map((post) =>
            <PostItem key={post.id} post={post} commentCreatedEvenEmitter = {this.commentCreatedEvenEmitter}/>
        );

        return <div className="d-flex flex-row flex-wrap justify-content-start">
            { renderedPosts }
            </div>;
    }
}
