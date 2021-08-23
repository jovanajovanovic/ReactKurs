// komponenta koja predstavlja jedan post 
import './ShowPost.css'
export function ShowPost(props){
    // post atribut => <ShowPost post={data}/> => props.post = {id, userId, body, title}

    let element = (
        <div className='post'>
            <p>Title : {props.post.title}</p>
            <p>ID : {props.post.id}</p>
            <p>User ID : {props.post.userId} </p>
            <p>Body: {props.post.body}</p>             
        </div> 
    )

    return element; 
}