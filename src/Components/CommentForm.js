import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commenter: '',
            text: '',
        }
    }

    handleCommenter = (e) => {
        this.setState({ commenter: e.target.value })
    }

    handleText = (e) => {
        this.setState({ text: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const commenter = this.state.commenter.trim();
        const text = this.state.text.trim();

        this.props.onCommentSubmit({ commenter: commenter, text: text });
        this.setState({ commenter: '', msg: '' });

        if (!text || !commenter) {
            return;
        }

    }

    render() {
        return (
            <div>
                <form>
                    <input type="type" name="author" id="author" placeholder="Your Name" value={this.state.commenter} onChange={this.handleCommenter} />
                    <textarea name="commentSection" id="comment" placeholder="Enter your comment!" value={this.state.text} onChange={this.handleText}></textarea>
                    <input type="submit" name="sub" id="post" value="post" />
                </form>
            </div>
        )
    }
}

export default CommentForm;