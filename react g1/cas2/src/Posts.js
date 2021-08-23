// komponenta za prikaz svih postova 

import { ShowPost } from "./ShowPost"
let url_user = 'https://jsonplaceholder.typicode.com/users';

// asinhrona funkcija za dobavljanje korisnika
const loadUser = async(id) => {
    // u zavisnosti od prosledjenog userID/a dobicemo celog user/a
    let user = await fetch(`${url_user}/${id}`);
    let userObject = await user.json(); // pretvaramo podatke u objekat

    return userObject.name; // mogu ovo zato sto znam da mi user ima atribut name i samo mi je on potreban
  
  }

export function Posts(props) { 
    // props -> posts => <Posts posts={data} /> => props.posts = niz
    let nizPosts = props.posts; //niz post objekata {id, userId, title, body}
    // alert(nizPosts[0].userId);
    let niz = [] 
    // loadUser(nizPosts[0].userId).then(user => alert(user));

    for(let p of nizPosts){
        loadUser(p.userId).then(user => {
            // alert(p.id + ' ' + user);
            // niz.push('bla')
            niz.push({'id': p.id, 'title': p.title, 'userId': user, 'body': p.body})
        });
    }
    alert(JSON.stringify(niz));


    let postsJsx = niz.map((p) => <ShowPost post={p}/>); // niz ReactElemenata 
    
    // vratice mi neki react element -> jsx izraz => html + js ({js izraz})
    let element  = (
        <div>
            {postsJsx} 
        </div>
    );

    return element;

}