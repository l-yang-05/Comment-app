import React from 'react';
import CommentList from './CommentList';



class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }
    }



    render() {
        return (
            <div className="comment-container">
                <h2>Comment box</h2>
                <CommentList />
            </div>
        )
    }
}
export default CommentBox;