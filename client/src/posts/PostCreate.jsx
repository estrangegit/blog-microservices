import React from 'react';
import axios from 'axios';

export default class PostCreate extends React.Component{

    constructor(props) {
        super(props);
        this.state = {title: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4000/posts', {
            'title': this.state.title
        })

        this.setState({title: ''});
        this.props.postCreatedEvenEmitter.emit('new-post-created');
    }

    handleChange = (event) => {
        this.setState({title: event.target.value})
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input value={this.state.title} onChange={ this.handleChange } className="form-control"/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>;
    }
}
