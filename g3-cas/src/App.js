import logo from './logo.svg';
import './App.css';

//sablon za prikaz jednog todo objekta 
//props je lista atributa koji su prosledjeni komponenti kao atributi html/a <App todo={data} id={id}/>
function App(props) {
  return (
    <table className='table_todo'> 
      <caption> Todo - {props.id} </caption>
      <tr> 
        <th> ID </th>
        <td> {props.todo.id}</td>
      </tr>
      <tr> 
        <th> USER ID</th>
        <td> {props.todo.userId}</td>
      </tr>
      <tr> 
        <th> TITLE </th>
        <td> {props.todo.title}</td>
      </tr>
      <tr> 
        <th> COMPLETED </th>
        <td> {(props.todo.completed) ? 'YES' : 'NO'}</td>
      </tr>
    </table>
  );
}

export default App;
