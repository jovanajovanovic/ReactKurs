// komponenta koja predstavlja jedan post 
import './ShowPost.css'
import React from 'react';
import ReactDOM  from 'react-dom';
import { InfoPost } from './InfoPost';

let url = `https://jsonplaceholder.typicode.com/comments?postId=`;
let prethodni_element = undefined; //to mi je element sa kojeg treba da skinem crveni okvir 

const showPostInfo = (post, event) => {
    // alert(post);
    //element na koji smo kliknuli 
    if(prethodni_element !== undefined){
        prethodni_element.classList.toggle('elem-click');
    }
    let elem = event.target; 
    elem.classList.toggle('elem-click');
    prethodni_element = elem; //novi kliknuti element postaji prethodni kada sledeci put budemo kliknuli na neki element; 
    // post moramo proslediti ovoj metodi da bi mogli da ga prikazemo 
    // dobavicemo i komentare 
    fetch(`${url}${post.id}`) //dobavimo komentare 
    .then (response => response.json())
    .then (data => 
        {
            // data = niz komentara ; post -> koji smo prosledili metodi
           let elem =  <InfoPost post={post} comments={data}></InfoPost>
           let mesto = document.getElementById('info_post');
           ReactDOM.render(elem, mesto);
        })
        
}

export function ShowPost(props){
    // post atribut => <ShowPost post={data}/> => props.post = {id, userId, body, title}

   
    

    let element = (
        <div className='post' onClick={(e) => showPostInfo(props.post, e)}>
            <p>ID : {props.post.id}</p>
            <p><b>  {props.post.title} </b></p>
            <p>{props.post.userId} </p>
            {/* <p>Body: {props.post.body}</p>           -> body necu da prikazujem za sve postove odmah nego tek kada kliknem na jedna od njih   */} 
        </div> 
    )

    return element; 
}