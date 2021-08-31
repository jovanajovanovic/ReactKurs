// import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import ReactDOM from 'react-dom';
import { ShowPosts } from './ShowPosts';

let url_post = 'https://jsonplaceholder.typicode.com/posts'; 
let url_user = 'https://jsonplaceholder.typicode.com/users'; 

const loadUserById = async (id) => {
  let user = await fetch(`${url_user}/${id}`); // Promise(user)
  let user_obj = await user.json(); 

  return user_obj.name; 
}

const getAllUsers = async(posts) => {
  // za svaki post treba pozvati metodu loadUserById i
  //niz koji je niz postova gde je idUser/a zamenjen sa imenom
  let niz = [];
  for(let p of posts ) {
   let user = await loadUserById(p.userId); //ime korisnika
   let post = {'id': p.id, 'userId': user, 'title': p.title, 'body': p.body};
   niz.push(post); 
  }

  return niz; 
}

const loadPosts = () => {
// funkcija za dobavljanje postova i izvrsice se klikom na dugme Posts
  // za ucitavanje koristimo fetch metodi ona ce primiti url ka endpointu za dobavljanje postova 
  // asinhrona metoda sto znaci da se pauzira u toku izvrsavanja => Promise objekat (nemam odmah podatke, ali ce uskoro biti tu)
 ReactDOM.render(<h1>Dobavljanje sadrzaja...</h1>, document.getElementById('posts_data') ) //ovo sam dodala samo da bi imali informaciju sta se desava 
  fetch(url_post)  
    .then(response => response.json()) //kad podaci stignu izvrsice funkciju koju joj prosledimo; dobijene podatke pretvorimo u objekat
    .then(data => {
      // data => niz postova i to moramo proslediti komponenti koja ce da ih prikaze
      // obradimo dobijene podatke 
      // 1. prikazemo te podatke 
      // showPosts ce da mi ima 
      // atribut posts i na taj nacin cu proslediti podatke za prikaz(data)
      getAllUsers(data) //da dobavimo sve korisnike
      .then(posts => {
        let element = <ShowPosts posts={posts}/>
      let mesto = document.getElementById('posts_data');
      ReactDOM.render(element, mesto);
      })
      
    })
}

const loadTodos = () => {
  // za sad ce da bude prazna, ovde cemo ucitati todove
}



function App() {
  return (
    <div className="App">
      <button onClick={loadPosts} > Posts </button>
      <button onClick={loadTodos} > Todos </button>
      <div id='displayEntity' className='container'>
        {/* ovde cemo prikazati posts odnosno todos u zavisnosti od toga na sta samo kliknuli */}
        {/* podelicemo ovaj div na 2 odnosno na jedan koji prikazuje postove i drugi za prikaz vise informacija o jednom postu */}
        <div id='posts_data'></div>
        <div id='info_post'>
          <h1> Info </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
