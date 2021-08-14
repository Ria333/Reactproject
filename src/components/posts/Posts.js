import {useEffect, useState} from 'react';
import Post from "../post/Post";
import {getPosts} from "../../service/post.service";
export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
        }, []
    );
    console.log(posts);
    return (<div>
            {posts.map(value => <Post item={value} key={value.id}/>)}
        </div>
    );
}