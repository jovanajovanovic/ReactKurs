// ova komponenta prikazuje sve podatke o postovima, odnosno prikazuje sve postove
// i prikazuje onaj info delo 

import { Posts } from "./Posts";

export function DisplayPosts(props){
     return (
        <div className='container'>
            {/* smestimo sve postove  */}
            <div id='posts' className='posts'>
                {/* ovde treba da smestimo prikaz svih postova pozovemo komponentu Posts */}
                <Posts posts={props.posts}></Posts>
            </div>
             {/* informacije o jednom postu */}
            <div id='info_post' className='info'>
            {/* <h1>Informacije o postu</h1>    */}
            </div> 

        </div> 

     ) 

}