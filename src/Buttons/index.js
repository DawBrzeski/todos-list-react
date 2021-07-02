import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTask }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons_button">
                    {hideDoneTask ? "Pokaz" : "Ukryj"} ukończone
                </button>
                <button className="buttons_button"
                    disabled={tasks.every(({ done }) => done)}
                >Ukończ wszsytkie
                </button>
            </>

        )}
    </div>
);


export default Buttons;
