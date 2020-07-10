import React from 'react';
import axios from 'axios';

export default class CommentCreate extends React.Component{

    constructor(props) {
        super(props);
        this.state = { content : ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://localhost:4001/posts/${this.props.postId}/comments`, {
            'content': this.state.content
        })

        this.setState({content: ''});
    }

    handleChange = (event) => {
        this.setState({content: event.target.value})
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>New comment</label>
                    <input value={this.state.content} onChange={ this.handleChange } className="form-control"/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>;
    }
}
