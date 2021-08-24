import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import ReactDOM from 'react-dom';
import { ShowPosts } from './ShowPosts';

let url_post = 'https://jsonplaceholder.typicode.com/posts'; 

const loadPosts = () => {
// funkcija za dobavljanje postova i izvrsice se klikom na dugme Posts
  // za ucitavanje koristimo fetch metodi ona ce primiti url ka endpointu za dobavljanje postova 
  // asinhrona metoda sto znaci da se pauzira u toku izvrsavanja => Promise objekat (nemam odmah podatke, ali ce uskoro biti tu)
  fetch(url_post)  
    .then(response => response.json()) //kad podaci stignu izvrsice funkciju koju joj prosledimo; dobijene podatke pretvorimo u objekat
    .then(data => {
      // data => niz postova i to moramo proslediti komponenti koja ce da ih prikaze
      // obradimo dobijene podatke 
      // 1. prikazemo te podatke 
      // showPosts ce da mi ima 
      // atribut posts i na taj nacin cu proslediti podatke za prikaz(data)
      let element = <ShowPosts posts={data}/>
      let mesto = document.getElementById('displayEntity');
      ReactDOM.render(element, mesto);
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
      <div id='displayEntity'>
        {/* ovde cemo prikazati posts odnosno todos u zavisnosti od toga na sta samo kliknuli */}
      </div>
    </div>
  );
}

export default App;
