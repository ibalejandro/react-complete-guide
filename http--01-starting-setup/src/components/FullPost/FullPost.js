import React, {Component} from 'react';

import './FullPost.css';
import Api from "../../services/Api";

class FullPost extends Component {
    state = {
        loadedPost: null
    };

    componentDidUpdate() {
        const getSpecificPost = async (id) => {
            const post = await Api.getSpecificPost(id);
            // console.log(post);
            if (post) {
                console.log("Updating state...")
                this.setState({loadedPost: post});
            }
        };
        if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
            getSpecificPost(this.props.id);
        }
    }

    deletePostHandler = async (id) => {
        const deletedPost = await Api.deletePost(id);
        console.log(deletedPost);
    };

    render() {
        let post = <p>Please select a Post!</p>;
        if (this.props.id) {
            post = <p>Loading...</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button
                            onClick={() => {this.deletePostHandler(this.props.id)}}
                            className="Delete">Delete
                        </button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;