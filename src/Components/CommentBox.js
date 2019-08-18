import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';


class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userMsg: '',
        };
    }
    render() {
        return (
            <div>
                <h2>Comment box</h2>
                <CommentList />
                <CommentForm />
            </div>
        )
    }
}
export default CommentBox;