import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            author: '',
            comment: ''
        }
    }

    handleAuthor = (e) => {

    }

    handleReply = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleReply}>
                    <input type="text" name="author" placeholder="Enter your name" />
                    <textarea name="comment" placeholder="Enter your message"></textarea>
                    <button type="submit" name="post">Reply</button>
                </form>
            </div>
        )
    }


}

export default CommentForm;