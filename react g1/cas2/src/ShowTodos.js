// komponenta za prikaz svih todova 

import { ShowTodo } from "./ShowTodo";
import './ShowTodos.css'

// mozemo ih prikazati kao tabelu pa cemo napraviti tabelu todo-ova 
export function ShowTodos(props) {
    // props => atribut todos
    let todos = props.todos; //niz todova koje treba da prikazem 

    // potrebno je kreirati jsx za prikaz svih todova 
    // pravicemo komponentu koja ce da prikaze 1 element odnosno 1 todo 
    // ovde imam niz ShowTodo komponenti
    let jsx_todos = todos.map(todo => <ShowTodo todo={todo}></ShowTodo>);
    let tabela = (<table> 
                    <tr> 
                        {/* definisemo zaglavlje tabele  */}
                        <th> ID </th>
                        <th> USER ID</th>
                        <th> TITLE </th>
                        <th> COMPLETED </th>
                    </tr> 
                    {jsx_todos}
                  </table>)

    return tabela; 
}