import {Geo} from "../geo/Geo";

export function Address({}) {

        return (
            <div className={'divAddress'}>
                <div>
                    <p> street, suite, city, zipcode</p>
                    <Geo {...Geo}/>
                </div>
            </div>
        )
    }
