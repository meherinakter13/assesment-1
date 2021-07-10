import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import loading from '../../images/loading.gif';

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                console.log(data);
            })
    }, [])
    const allPosts = posts.slice(0, 8);
    return (
        <div className="row m-0">

            {
                allPosts.length === 0 && <img style={{display: "block", marginLeft: "auto", marginRight: "auto" }} src={loading} alt="" />
            }
            {
                allPosts.map(post => <div className="col-lg-3 col-md-6 col-sm-12"> <Posts post={post}></Posts></div>)
            }
            
        </div>
    );
};

export default Home;