import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div>
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone}
                    className="button">
                    {hideDone ? "Pokaz" : "Ukryj"} ukończone
                </button>
                <button
                    className="button"
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >Ukończ wszsytkie
                </button>
            </>

        )}
    </div>
);


export default Buttons;
