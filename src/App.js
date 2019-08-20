import React from 'react';
import './App.css'
import ReplyForm from './ReplyForm'
import RepliedComment from './ReplyComment';
import LikeButton from './Like';
import DislikeButton from './Dislike';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      commDesc: ''
    }

  }

  getMessage = (event) => {
    this.setState({
      commDesc: event.target.value
    })
  }

  showReplyForm = (index) => {
    const newComment = [...this.state.comments]
    newComment[index].showReplyForm = !newComment[index].showReplyForm
    this.setState({ comments: newComment })
  }


  submitComment = (e) => {
    e.preventDefault()
    const newComment = [...this.state.comments] //copy of comments array
    const commentsObj = {
      commDesc: this.state.commDesc,
      replies: [],
      showReplyForm: false
    }
    newComment.push(commentsObj)
    this.setState({
      comments: newComment
    })

  }


  handleReplied = (indexToOriginalComment, indexToRepliedComment) => {
    const newComment = [...this.state.comments]
    newComment[indexToOriginalComment].replies.splice(indexToRepliedComment, 1)
    this.setState({
      comments: newComment
    })
  }

  handleReplyPost = (event, index) => {
    const newComment = [...this.state.comments]
    const commentsObj = {
      commDesc: event.target.previousSibling.value,
      likes: 0,
      dislikes: 0,
    }
    newComment[index].replies.push(commentsObj)
    newComment[index].showReplyForm = !newComment[index].showReplyForm
    this.setState({ comments: newComment })
  }

  handleDeleteComment = (index) => {
    const newComment = [...this.state.comments]
    newComment.splice(index, 1)
    this.setState({
      comments: newComment
    })
  }

  render() {
    const allCommArray = this.state.comments.map((commentObj, ogCommID) => {
      return (
        <React.Fragment>
          <div key={commentObj.commDesc + ogCommID} className="commentmsg">
            <h2>{commentObj.commDesc}</h2>
            <LikeButton />
            <DislikeButton />
            <button onClick={() => this.showReplyForm(ogCommID)}>Reply</button>
            <button onClick={() => this.handleDeleteComment(ogCommID)}>Delete</button>
          </div>
          {commentObj.replies.map((theCommObject, replyCommID) => {
            return (
              <React.Fragment>
                <h5>{`in reply to ${commentObj.commDesc}`}</h5>
                <RepliedComment ogCommID={ogCommID} theCommObject={theCommObject} replyCommID={replyCommID} handleReplied={this.handleReplied}
                />
              </React.Fragment>
            )
          })}
          {commentObj.showReplyForm && (
            <ReplyForm index={ogCommID} handleReplyPost={this.handleReplyPost} />
          )}
        </React.Fragment>
      )
    })

    return (
      <div>
        <h1>Enter in a comment!</h1>
        <form className="CommentPost">
          <textarea onChange={this.getMessage} className="comment-box" />
          <button onClick={this.submitComment} type="button">Post Comment</button>
        </form>
        <p className="startingmsg">{allCommArray.length > 0 ? allCommArray : 'Add a comment to start the thread :)'}</p>
      </div>

    )
  }

}

export default App;



