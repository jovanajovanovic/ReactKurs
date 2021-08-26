// komponenta koja prikazuje jedna todo, to ce biti jedan red u tabeli 
// komponenta mora primit jedan todo koji treba da prikaze kako bi znala sta treba da prikaze u nekom redu tabele 
export function ShowTodo(props){
    let todo = props.todo; // 1 todo
    
    let jsx_todo = (
        <tr>
            <td> {todo.id} </td>
            <td> {todo.userId}</td>
            <td> {todo.title}</td>
            <td> {(todo.completed)? 'YES' : 'NO'}</td>
        </tr> 
    )

    return jsx_todo; 


}