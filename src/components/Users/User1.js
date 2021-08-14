import {Address} from "./Address1";

export function User1({id, name, username, email, phone, website, address}) {
    return (
        <div className={'divUser'}>
            <div>
                <p>{id} name - {name} username - {username}</p>
                <p>email - {email}</p>
                <Address {...address}/>
                <p>phone - {phone}</p>
                <p>website - {website}</p>
            </div>
        </div>
    )
}
