// ovde definisemo prikaz jednog post/a 
import './ShowPost.css';
import React from 'react';
import ReactDOM from 'react-dom';

// ovde cu cuvati poslednji element na kojim sam kliknula 
let selectElement = undefined; 

const showInfo = (post, event) => {
    // element na koji sam kliknula 
    let click_element = event.target;
    if(selectElement !== undefined){
        selectElement.classList.toggle('click-element');
    } 
    // toggle - prima ime klase i gleda ako postoji klasa u listi klasa onda ce se izbrisati a ako ne postoji dodace je u listu 
    click_element.classList.toggle('click-element'); 
    selectElement = click_element;

    // prikazemo jedan post 
    let element =  (<div>
            <p>TITLE : {post.title}</p>
            <p>ID : {post.id} </p> 
            <p>USER : {post.userId}</p>
            <p>BODY: {post.body} </p>   
        </div>); 

    ReactDOM.render(element, document.getElementById('info_post'));
}


// <ShowPost post={p}/>
export function ShowPost (props) {
    let post = props.post;  // ovo mi je post koji trebam da prikazem 
// e -> objekat event i mogu da pristupim njegovim atributima
    let jsx_element = (
        <div className='post_container' onClick={(e) => showInfo(post, e)}>
            <p>TITLE : {post.title}</p>
            <p>ID : {post.id} </p> 
            <p>USER : {post.userId}</p>
            {/* <p>BODY: {post.body} </p>    */}
        </div>
    );

    return jsx_element; 

}