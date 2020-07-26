import React from 'react';
import PostItem from './PostItem';
import axios from 'axios';

export default class PostList extends React.Component {
  constructor() {
    super();
    this.state = { posts: {} };
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const res = await axios.get('http://posts.com/posts');
    this.setState({ posts: res.data });
  };

  render() {
    const renderedPosts = Object.values(this.state.posts).map((post) => (
      <PostItem key={post.id} post={post} />
    ));

    return (
      <div className='d-flex flex-row flex-wrap justify-content-start'>
        {renderedPosts}
      </div>
    );
  }
}
