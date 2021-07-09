import React from 'react';
import './Posts.css';

const Posts = ({ post }) => {
    return (

        <div class="card card-design shadow-sm mb-2 mt-3">
            <img className="img-fluid content" src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg" alt="" />
            <div className="card-body">
                <h3 className="card-title p-2">{post.title.slice(0, 10)}</h3>
                <p className="card-text p-2">{post.body}</p>
            </div>
            <div className="d-flex justify-content-between">
                <div className="p-4">
                    <a href="#">SHARE</a>
                </div>
                <div className="p-4">
                    <a href="#">LEARN MORE</a>
                </div>
            </div>
        </div>

    );
};

export default Posts;