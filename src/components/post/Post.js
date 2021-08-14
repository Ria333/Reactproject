import {useEffect, useState} from 'react';
import {getComments} from '../../services/comment.service';
import Comment from "../../components/comment/Comment";

export default function Post([item]) {
    let [comments, setComments] = useState([]);
    useEffect(() => {
            getComments(item.id)
                .then(value => setComments([...value]));
        }, [item.id]
    )
    ;
    return (<div>
        <p>{item.id} {item.title} {item.body}</p>
            {comments.map ((item,index)=>
                <Comment item = {item} key = {item.id}/>)}
    </div>
    );
}
