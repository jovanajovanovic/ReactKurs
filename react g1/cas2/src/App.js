import logo from './logo.svg';
import './App.css';
import React from 'react';
import  ReactDOM  from 'react-dom';
import { Posts } from './Posts';
import { ShowTodos } from './ShowTodos';
import { DisplayPosts } from './DisplayPosts';


let url = 'https://jsonplaceholder.typicode.com/posts';
let url_user = 'https://jsonplaceholder.typicode.com/users';
let url_todo = 'https://jsonplaceholder.typicode.com/todos'; 


// dobavim podatke -> sve postove
// asinhrona metoda -> moze da se pauzira u toku izvrsavanja,
// i vraca nam neki Promise objekat => podaci nisu jos tu, ali ce biti uskoro 
// then nad promisom => prima lambda funkciju koju ce da izvrsi 
// tek kad podaci budu pristigli 
const asyncLoadPosts = async()=> {
  // await MOZE SAMO U ASIHRONOJ FUNKCIJI 
  // await sluzi da stopira asinhronu metodu da saceka da fetch odradi svoje i pretvori Promise u vrednost 
  let data = await fetch(url); //ovde dobavimo podatke; ali da bi nastavile dalje izvrsavanje moramo da sacekamo da dobijemo podatke od fetch funkcije
  let data_obj = await data.json();
  return data_obj; // Promise(objekat)
}

// asinhrona funkcija za dobavljanje korisnika
const loadUser = async(id) => {
  // u zavisnosti od prosledjenog userID/a dobicemo celog user/a
  let user = await fetch(`${url_user}/${id}`);
  let userObject = await user.json(); // pretvaramo podatke u objekat

  return userObject.name; // mogu ovo zato sto znam da mi user ima atribut name i samo mi je on potreban

}

//   asinhrona funkcija gde za svaki post pronadjemo usera pomocu metode loadUser i zamenimo userID sa imenom 
//  vratimo niz postova gde je userID = name 
const loadUserForPost = async (posts) => { 
  let niz = [];
  for(let p of posts){
     let user = await loadUser(p.userId); //ovde dobijemo name od usera i onda ga tek ubacimo u niz
     niz.push({'id': p.id, 'title': p.title, 'userId': user, 'body': p.body})
  }

  return niz; 

}



const loadPosts = () => {
  // posto se podaci dugo ucitavanju napisacemo poruku da je u toku dobavljanje podataka 
  ReactDOM.render(<div><h1> Dobavljanje podataka ...</h1></div>, document.getElementById('data') );
    // pozovemo asinhronu metodu za dobavljanje podatka
    // prvo dobavimo postove
    asyncLoadPosts()
    .then(data => { //koji mi vrate postove 
      // pozovem asinhronu metodu koja mi za za niz postova nadje korisnike
      loadUserForPost(data)
        .then(data_posts => {  // ovde imamo niz postova gde je userID zapravo ime korisnika
          let elem = <DisplayPosts posts={data_posts} />  //ovo je element koji treba da prikazemo
          let place = document.getElementById('data'); //div u kojem prikazujem sve postove
          ReactDOM.render(elem, place)
          }  
        )
      }
    )
  
};

// funckija koja dobavlja sve todove
const loadTodos = () => {
  // dobavljamo podatke sa servera fetch metodom 
  fetch(url_todo) //=> ASINHRONA FUNKCIJA -> PROMISE 
    .then(response => response.json()) // PODATKE => OBJEKAT => PROMISE(OBJEKAT)
    .then(data => {
      //ovde sad imam niz todo objekata (data)
      //treba da prikazem te podatke 
      let element = <ShowTodos todos={data}></ShowTodos>
      let mesto = document.getElementById('data');
      ReactDOM.render(element, mesto); 
    })
}

function App() {
    
  return (
    <div className="App">
      <button onClick={loadPosts}> Posts </button>
      <button onClick={loadTodos}> Todos</button>
      <div id='data'>
      
      </div>
    </div>
  );
}

export default App;
