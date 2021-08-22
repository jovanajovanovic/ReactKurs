//komponenta za prikaz jednog reda
function PrikazJednogReda(props){
    return (
        <tr> 
            <td>{props.todo.id}</td>
            <td>{props.todo.userId}</td>
            <td>{props.todo.title}</td>
            <td>{(props.todo.completed)? 'YES' : 'NO'}</td>   
        </tr>
    )
}



function PrikazSvih(props) {
   //komponenta za prikaz svih todo-ova
   //props.todos - zato sto smo u index.js stavili <PrikazSvih todos={data}/>

    let jsxs = props.todos.map((val) => <PrikazJednogReda todo={val}/>);
    return <table> {jsxs} </table>

}


export default PrikazSvih; 