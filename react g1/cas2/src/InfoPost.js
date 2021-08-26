// komponenta za prikaz informacija o post-u
// id, user, title, body, comments 

import { ShowComment } from "./ShowComment";

export function InfoPost(props) {
    // <InfoPost post={post} comments={data}/> 
    let post = props.post; //objekat koji prikazuje jedan post 
    let comments = props.comments; //niz komentara

    let post_element = (<div>
        <h1> {post.title}</h1>
        <p> USER : {post.userId} </p>
        <p> BODY: {post.body}</p>
    </div> )

    // imam niz komentara i hocu da svaki komentar pretvotim u prikaz odnosno u ShowComment komponentu kako bi mogla da ga prikazem posle
    // posto je u pitanju niz onda cu iskoristiti map operaciju i svaki element niza proslediti komponenti koja kreira prikaz
    // pored komentara prosledicu i indeks komentara kako bi mogla da napisem koji je komentar po redu (atribut index)
    let comments_element = comments.map((element, idx, array) => <ShowComment comment={element} index={idx+1}/>);
    
    // element koji cemo vratiti to je div =  (post_element) + (div + komentari + div)
    let element = <div>{post_element} <div> {comments_element} </div></div> 

    return element; 
}