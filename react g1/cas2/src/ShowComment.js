// komponenta za prikaz jednog komentara 
import './ShowComment.css';

// komentar = id, postid, name, email, body
// props {comment: komentar}; moramo proslediti komentar da bi znali sta treba da prikazemo 
export function ShowComment(props){
    let comment = props.comment; //preuzmemo prosledjeni komentar
    let idx = props.index;
    //kreiram jsx koji definise kako ce komentar da bude prikazan 
    let element = (<div className='comment'>
        {/* <p> ID : {comment.id}</p> => ZATO STO NEMA SMISLA KORISNIKU PRIKAZATI ID */}
        {/* <p> POST ID : {comment.postId}</p> */}
        <p> {idx}. komentar </p>
        <p> NAME : {comment.name}</p>
        <p> BODY : {comment.body}</p>
    </div> )
    //vratimo prikaz jednog komentara 
    return element; 
}