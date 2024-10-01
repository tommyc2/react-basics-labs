
const Task = (props) => {

    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className='description'>{props.description}</p>
            <p className='priority' style={{
                backgroundColor: props.priority === "High" ? 'red' : (props.priority === 'Low' ? 'green' : 'orange')}}>
                <b>{props.priority}</b>
            </p>
            <button onClick={props.markDone} className="doneButton">Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    );
}


export default Task;