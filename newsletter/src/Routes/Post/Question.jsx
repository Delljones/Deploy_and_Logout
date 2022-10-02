import React from 'react';
import './article.css'
function Question() {
 return   (
     <div className="ask">
         <h1>What Would You Like To Ask?</h1>
         <div className="forms">
             <form>
                 <label className="label">Enter Title:</label>
                 <input className="input"
                        type="text"
                        placeholder=' Enter your title here'/>
             </form>
             <form>
                 <label className="label">Describe Your Problem</label>
                 <input className="inputProblem"
                        placeholder=' Please describe your problem here'
                        type="text"/>
             </form>
             <form>
                 <label className="label">Tags:</label>
                 <input className="input"
                        type="text"
                        placeholder=' Please add up to 3 tags here to describe
                your form - ie "# React Development"'/>
                 <br></br>
                 <button type="submit"> Submit</button>
             </form>
         </div>
     </div>
    )
} export default Question;

