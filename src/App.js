import React from 'react';
import './App.css';
import DislikeButton from './Dislike';
import LikeButton from './Like';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentArray: [
        {
          message: "I want to sleep",
          showReply: false,
          reply: [
            { replies: "Same, I wanna sleep too." },
          ],
          id: 1
        },
        {
          message: "Quack",
          showReply: false,
          reply: [
            { replies: "Quack?" }
          ],
          id: 2
        }
      ]
    }
  }
  ;

  prevId = 2;



  //creates ref
  comment = React.createRef();
  reply = React.createRef();


  //addMessage message is passed messaged and adds it to state
  addMessage = message => {
    this.setState(prevState => {
      return {
        commentArray: [
          ...prevState.commentArray,
          {
            message,
            showReply: false,
            reply: [
              { replies: '' }
            ],
            id: (this.prevId += 1)
          }
        ]
      };
    });
  };

  //handleSubmit method is passing the comment ref value to my addMessage message
  handleSumbit = (e) => {
    e.preventDefault();
    this.addMessage(this.comment.current.value);
    e.currentTarget.reset();
  };

  //this removes message with filter by returning array withut selected id object
  handleRemove = (id) => {
    this.setState(prevState => {
      return {
        commentArray: prevState.commentArray.filter(p => p.id !== id)
      };
    });
  };

  handleRemoveReply = (index) => {
    let replyArray = this.state.commentArray.reply
    this.setState({
      reply: replyArray.splice(index, 1)
    })
  }




  //findProperty reusable function toggles property
  findProperty = (property, id) => {
    this.setState({
      commentArray: this.state.commentArray.map(comment => {

        if (id === comment.id) {
          return {
            ...comment,
            [property]: !comment[property]
          };
        }
        return comment;
      })
    });
  };

  //toggles showReply
  toggleReply = (id) => {
    this.findProperty("showReply", id);
  };


  //creates a new reply object
  addReply = (reply, id) => {
    this.setState({
      commentArray: this.state.commentArray.map(comment => {
        if (id === comment.id) {
          return {
            ...comment,
            reply: [
              ...comment.reply,
              { replies: reply }
            ]
          }
        }
        return comment;
      })
    })

  }

  //gets input from ref, passes it to addreply
  handleReplyComment = (id, e) => {
    e.preventDefault();
    this.addReply(this.reply.current.value, id);
    e.currentTarget.reset();
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.commentArray.map((item, index) => {
            return (
              <div key={index} className="commentbox">
                <p className="comment">{item.message}</p>
                <div>
                  <LikeButton />
                  <DislikeButton />
                  <button onClick={() => this.handleRemove(item.id)}>Delete Comment</button>
                  <button onClick={() => this.toggleReply(item.id)}>Reply</button>
                  {item.showReply && (
                    <form onSubmit={(e) => this.handleReplyComment(item.id, e)}>
                      <textarea ref={this.reply} placeholder="reply to comment"></textarea>
                      <button>Submit</button>
                    </form>
                  )}
                </div>
                {item.reply.map((reps, index) => {
                  return (
                    <div className="reply">
                      <h5 className="reply-comment">
                        {item.reply[item.reply.length - 1].replies ? `in reply to '${item.message}'` : ""}
                      </h5>
                      <p>{reps.replies}</p>
                      <LikeButton />
                      <DislikeButton />
                      <button onClick={() => this.handleRemoveReply(index)}>Delete Reply</button>
                    </div>

                  )
                })}

              </div>
            );
          })}
          {/* 
          <div className="commentform-wrapper">
            <form onSubmit={this.handleSumbit}>
              <textarea name="commentbox" ref={this.comment} placeholder="Enter your message here!"></textarea>
              <button type="submit" name="postComment">Post Comment</button>
            </form>
          </div> */}
        </div>
      </React.Fragment >
    );
  }
}

export default App;