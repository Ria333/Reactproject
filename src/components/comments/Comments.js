import {useEffect, useState} from 'react';
import Comment from "../comment/Comment"
import {getComments} from "../../service/comment.service";
export default function Comments () {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(value => setComments([...value]));
        }, []
    );
    console.log(comments);
    return (<div>
            {comments.map(value => <Comment item={value} key={value.id}/>)}
        </div>
    );
}