// ovde definisemo prikaz jednog post/a 
import './ShowPost.css';
import React from 'react';
import ReactDOM from 'react-dom';

const showInfo = (post) => {
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

    let jsx_element = (
        <div className='post_container' onClick={() => showInfo(post)}>
            <p>TITLE : {post.title}</p>
            <p>ID : {post.id} </p> 
            <p>USER : {post.userId}</p>
            {/* <p>BODY: {post.body} </p>    */}
        </div>
    );

    return jsx_element; 

}