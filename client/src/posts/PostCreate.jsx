import React from 'react';
import axios from 'axios';

export default class PostCreate extends React.Component {
  constructor() {
    super();
    this.state = { title: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('http://posts.com/posts/create', {
      title: this.state.title,
    });

    this.setState({ title: '' });
  };

  handleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Title</label>
            <input
              value={this.state.title}
              onChange={this.handleChange}
              className='form-control'
            />
          </div>
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    );
  }
}
