import "./style.css";

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li key={task.id}
                className={`item ${(task.done && props.hideDoneTasks) ? "item__hidden" : ""}`}>

                <button className={`button button__toggleDone`}>
                    {task.done ? "✔" : ""}
                </button>

                <span className={`content ${task.done ? " content__done" : ""}`}>
                    {task.content}
                </span>

                <button className="button button__remove">
                    🗑
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks; 