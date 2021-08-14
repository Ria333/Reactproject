import {useEffect, useState} from 'react';
import {getPost} from "../../service/post.service";
export default function Post({item}) {
    let [post, setPost] = useState({});
    useEffect(() => {
        getPost(item.id)
            .then(value => setPost({...value}));
    }, [item.id]);
    return (
        <div className={'divPost'}>
            {post.id}
            {post.title}
            {post.body}
        </div>
    );
}