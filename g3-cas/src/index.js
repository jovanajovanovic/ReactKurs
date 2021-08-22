import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PrikazSvih from './PrikazSvih';

// izdvojen url zato sto se koristim u svim metodama
let url = `https://jsonplaceholder.typicode.com/todos/`;


const loadData = () => {
  //1. uzmemo id koji unesen 
  let id = document.getElementById('todo_id').value; 
  //2. kreiramo url 
  let url1 = `${url}${id}`;
  //3. dobavimo podatke 
  fetch(url1)
    .then((response) => response.json())
    .then((data) => {
      //imam podatke, treba da prikazemo podatke
      // alert(JSON.stringify(data));
      // const props = {todo: data}; u App props.todo.todo.id
      ReactDOM.render(<App todo={data} id={id}/>, document.getElementById('todo_display'));
    })
}

//dobavljanje svih todo/ova, ova metoda se pozove kada se klikne na dugme Display All
// const loadDataAllTodos = () => {
//   //dobavim podatke i vratim dobavljene podatke
//  fetch(url)
//   .then (response => response.json()) //Promise(objekat)
//   .then (data => {
//     ReactDOM.render(<PrikazSvih todos={data}/>, document.getElementById('todos'))
//   })
  
// }

//ako hocemo da nam se odmah prikazu svi todovi
fetch(url)
  .then (response => response.json()) //Promise(objekat)
  .then (data => {
    ReactDOM.render(<PrikazSvih todos={data}/>, document.getElementById('todos'))
  })



//primer 1. 
ReactDOM.render(
  <div> 
    <input id='todo_id' type='number' min='1' max='200'></input>
    <button onClick={loadData}> Display </button>
    <br/> 
    {/* ovde cemo prikazati podatke koje dobijemo */}
    <div id='todo_display'></div> 
    {/* ne treba dugme ako nam se odmah prikazuju svi todovi */}
    {/* <button onClick={loadDataAllTodos}> Display All</button> */}  
    <div id='todos'></div>  
    </div>, document.getElementById('root')
)



// primer za promenljive elemente
// const VremePrikaz = () => {
//   return <h1>  Trenutno vreme je: {new Date().toLocaleTimeString()} </h1>
// }

// setInterval(() => {
//   ReactDOM.render(
//      <VremePrikaz/>,
//     document.getElementById('root')
//   )
// }, 1000); 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
