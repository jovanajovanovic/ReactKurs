// komponenta za prikaz svih postova 

import { ShowPost } from "./ShowPost"



export function Posts(props) { 
    // props -> posts => <Posts posts={data} /> => props.posts = niz
    let nizPosts = props.posts; //niz post objekata {id, userId, title, body}
  
    let postsJsx = nizPosts.map((p) => <ShowPost post={p}/>);
    
    
    // alert(JSON.stringify(niz));
    
    // vratice mi neki react element -> jsx izraz => html + js ({js izraz})
    let element  = (
        <div>
            {postsJsx} 
        </div>
    );

    return element;

}