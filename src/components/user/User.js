import {useEffect, useState} from 'react';
import {getUser} from "../../service/user.service";
import {Address} from "../address/Address";
import {Company} from "../company/Company";
export default function User({item}) {
    let [user, setUser] = useState({});
    useEffect(() => {
        getUser(item.id)
                .then(value => setUser({...value}));
        }, [item.id]);
    return (
        <div className={'divUser'}>
            {user.id}
            {user.name}
            {user.username}
            {user.email}
            <Address {...Address}/>
            {user.phone}
            {user.website}
            <Company {...Company}/>
        </div>
    );
}