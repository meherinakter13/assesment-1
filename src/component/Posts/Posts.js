import React from 'react';

const Posts = ({ post }) => {
    return (

        <div class="card card-design border-shadow mt-5" style={{ height: "30rem" }}>

            <div>
                <img style={{ height: '150px', width: '100%' }} className="img-fluid mb-3 content" src={`https://material-ui.com/static/images/cards/contemplative-reptile.jpg`} alt="" />

                <h3 className="p-2">{post.title.slice(0, 10)}</h3>
                <p className="p-2">{post.body}</p>
                <div className="d-flex justify-content-between">
                    <div className="p-4">
                        <a href="#">SHARE</a>
                    </div>
                    <div className="p-4">
                        <a href="#">LEARN MORE</a>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Posts;