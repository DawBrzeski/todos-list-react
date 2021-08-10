import "./style.css";
import { useState } from "react";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();

        if (trimmedNewTaskContent === "") {
            return;
        }
        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input value={newTaskContent}
                autoFocus
                className="form__input"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            ></input>
            <button className="form__button"> Dodaj zadanie</button>
        </form>
    )
};

export default Form;