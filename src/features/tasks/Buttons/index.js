import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    toggleHideDone,
    setAllDone,
    selectAreTasksEmpty,
    selectHideDone,
    selectIsEveryTaskDone,
    fetchExampleTasks
} from "../tasksSlice";
import { Wrapper, Button } from "./styled";


const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
            {!areTasksEmpty > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaz" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >Ukończ wszsytkie
                    </Button>
                </>

            )}
        </Wrapper>
    )
};


export default Buttons;
