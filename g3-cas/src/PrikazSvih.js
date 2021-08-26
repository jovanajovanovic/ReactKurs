import './PrikazSvih.css'


//komponenta za prikaz jednog reda
function PrikazJednogReda(props){
    // hocu da napravim da obojim redove u zavisnosti od atributa completed
    let cn = (props.todo.completed) ? 'green' : 'red'; 

    return (
        <tr className={cn}> 
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
    return <table> <tr><th> ID </th> <th> User ID</th> <th> Title</th> <th> Completed </th> </tr>  {jsxs} </table>

}


export default PrikazSvih; 