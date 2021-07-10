import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

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
                allPosts.length === 0 && <img style={{display: "block", marginLeft: "auto", marginRight: "auto" }} src="https://lh3.googleusercontent.com/proxy/ThssABM_pMoDKN50DflhcwARyGwzd279Y8Gwiysoj1xi3LLTrq5zaQZOXE-0n-HIRZK_c9c19x88bYt0Zm6iF08KcZtLekrLlk22wXK7UQ" alt="" />
            }
            {
                allPosts.map(post => <div className="col-lg-3 col-md-6 col-sm-12"> <Posts post={post}></Posts></div>)
            }
            
        </div>
    );
};

export default Home;