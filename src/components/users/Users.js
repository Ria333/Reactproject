import {useEffect, useState} from 'react';
import User from "../user/User";
import {getUsers} from "../../service/user.service";
export default function Users() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
            getUsers().then(value => setUsers([...value]));
        }, []
    );
    return (<div>
            {users.map(value => <User item={value} key={value.id}/>)}
        </div>
    );
}