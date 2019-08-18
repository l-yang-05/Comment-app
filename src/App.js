import React from 'react';
import './App.css';



function App() {
  const [userComment, setUserComment] = useState('');
  const [listOfComments, setListOfComments] = useState([])



  const commentDelete = (e) => {
    e.preventDefault();

  }

  return (
    <div className="main-container">
      <header>
        Comments
      </header>
      <p>{userComment}</p>
    </div>
  );
}

export default App;