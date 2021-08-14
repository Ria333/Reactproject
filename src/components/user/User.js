import {useEffect, useState} from 'react';
import {getPosts} from '../../services/post.service';
// import Posts from "../posts/Posts";
import Post from "../post/Post";

export default function User({item}) {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
            getPosts(item.id)
                .then(value => setPosts([...value]))
        }, [item.id]
    )
    ;
    return (<div>
            <p>{item.id} {item.name} {item.username} {item.email} {item.phone} </p>
            {posts.map ((item,index)=>
                <Post item = {item} key = {item.id}/>)}
            </div>
    );
}