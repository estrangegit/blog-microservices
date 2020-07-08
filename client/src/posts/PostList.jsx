import React from 'react';
import PostItem from './PostItem';
import axios from 'axios';

export default class PostList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {posts: {}};
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    componentDidMount() {
        this.fetchPosts();

        this.props.postCreatedEvenEmitter.on('new-post-created', () => {
            this.fetchPosts();
        })
    }

    fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts');
        this.setState({posts: res.data})
    }

    render() {
        const renderedPosts = Object.values(this.state.posts).map((post) =>
            <PostItem key={post.id} post={post}/>
        );

        return <div className="d-flex flex-row flex-wrap justify-content-between">
            { renderedPosts }
            </div>;
    }
}
