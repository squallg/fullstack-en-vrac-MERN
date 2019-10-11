/*
 * Post component
 */

/* Module imports */
import React, { Component } from 'react';

/* Style imports */
import "./Post.css";


/* Post component */
class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="post">

                <p className="post-text">{this.props.text}</p>

                <p className="post-meta-data">
                    <span className="author">{this.props.author}</span>
                    <span className="date">{this.props.date}</span>
                </p>

            </div>
        );
    }
}

export default Post;