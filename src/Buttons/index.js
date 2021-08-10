import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons_button">
                    {hideDone ? "Pokaz" : "Ukryj"} ukończone
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
