// ovde kreiramo komponentu koja ce mi prikazati sve postove na ekranu 
// kreiram ReactElement koji cu prikazati pomocu <ShowPosts />

import { ShowPost } from "./ShowPost";

// props => objekat koji ima prosledjene atribute , <ShowPosts posts={data}/> => props = {posts: data}
export function ShowPosts (props) {
    let postsArray = props.posts;

    // svaki post cemo prikazati u posebnom divu sto znaci da cu ovde imati niz divova
    let jsx_elements = postsArray.map((p) => <ShowPost post={p} />)
   

    return <div className='posts-container'>{jsx_elements}</div> ;
}