import React, {Component} from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Api from '../../services/Api';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    };

    componentDidMount() {
        const getPosts = async () => {
            let posts = await Api.getPosts();
            posts = posts.slice(0, 4);
            const updatedPosts = posts.map((post) => {
                return {
                    ...post,
                    author: "Max"
                }
            });
            this.setState({posts: updatedPosts});
            // console.log(posts);
        };
        getPosts();
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    };

    render() {
        const posts = this.state.posts.map((post) => {
            return (
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    click={() => {
                        this.postSelectedHandler(post.id)
                    }}/>
            );
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        );
    }
}

export default Blog;