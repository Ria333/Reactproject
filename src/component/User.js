export default function User (props) {
    let {name, surname, age, info, pict} = props;
    let classNameSimpson = 'user';
    return (
        <div className={classNameSimpson}>
            <h3> {name} {surname}</h3>
            <p> {age}</p>
            <p> {info}</p>
            <img src={pict} alt="one of the Simpsons"/>
        </div>
    )
        ;
}
