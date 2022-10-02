import React from 'react';
import './article.css'
function Article() {
    return (
        <div className="ask">
            <h1>Post an Article</h1>
            <div className="forms">
                <form>
                    <label className="label">Enter Title</label>
                    <input className="input"
                           type="text"
                           placeholder=' Enter your title here'/>
                </form>
                <form>
                    <label className="label">Abstract</label>
                    <input className="inputAbstract"
                           placeholder=' Please enter a 200 word abstract'
                           type="text"/>
                </form>
                <form>
                    <label className="label">Article Text</label>
                    <input className="inputProblem"
                           placeholder=' Please enter a 1000 word article'
                           type="text"/>
                </form>
                <form>
                    <label className="label">Tags</label>
                    <input className="input"
                           type="text"
                           placeholder=' Please Add up to 3 tags for your article eg. "Java" '/>
                </form>
            </div>
        </div>
    )
} export default Article;