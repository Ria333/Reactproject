import {useEffect, useState} from 'react';
import {getComment} from "../../service/comment.service";
export default function Comment({item}) {
    let [comment, setComment] = useState({});
    useEffect(() => {
        getComment(item.id)
            .then(value => setComment({...value}));
    }, [item.id]);
    return (
        <div className={'divComments'}>
            {comment.id}
            {comment.name}
            {comment.email}
            {comment.body}
        </div>
    );
}