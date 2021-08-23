import logo from './logo.svg';
import './App.css';
import React from 'react';
import  ReactDOM  from 'react-dom';
import { Posts } from './Posts';


let url = 'https://jsonplaceholder.typicode.com/posts';

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



const loadPosts = () => {
    // pozovemo asinhronu metodu za dobavljanje podatka
    asyncLoadPosts()
    .then(data => { //koji mi vrate postove 
      // map da za svaki post dobavimo user/a 
      // alert(JSON.stringify(data));

      let elem = <Posts posts={data} />  //ovo je element koji treba da prikazemo
      let place = document.getElementById('posts'); //div u kojem prikazujem sve postove
      ReactDOM.render(elem, place)
      }  
    )
  
};


function App() {
    
  return (
    <div className="App">
      <button onClick={loadPosts}> Display posts </button>
      <div id='posts'></div>
    </div>
  );
}

export default App;
