import React, {useState} from "react";
import './post.css'
import Question from "./Question";
import Article from "./Article";



function Post() {
// setting the variables
    const [questionText, setQuestion] = useState()
// on click for question
    const questionForm = () => {
        console.log("Question has been clicked")
        setQuestion(<Question/>)
    }
// On click for article
    const articleState = (e) => {
        console.log("Article has been clicked")
        setQuestion(<Article/>)
    }

    return (
        <div className="App">
            <h1>Hi - Please Enter a New Post</h1>
            <div className='radio'>
                <label className="select">Select Your Post Type: </label>
                <input onClick={questionForm} type="radio" value="question" className="question"/> Question
                <input onClick={articleState} type="radio" value="article" className="article"/> Article
            </div>
            {/*when the button is pressed it will display Question or Article*/}
            <div className="showform">
                <h1>{questionText}</h1>
            </div>
        </div>
    );
}
export default Post