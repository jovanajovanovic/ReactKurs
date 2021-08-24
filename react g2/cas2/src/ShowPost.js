// ovde definisemo prikaz jednog post/a 

// <ShowPost post={p}/>
export function ShowPost (props) {
    let post = props.post;  // ovo mi je post koji trebam da prikazem 

    let jsx_element = (
        <div>
            <p>TITLE : {post.title}</p>
            <p>ID : {post.id} </p> 
            <p>USER ID: {post.userId}</p>
            <p>BODY: {post.body} </p>   
        </div>
    );

    return jsx_element; 

}