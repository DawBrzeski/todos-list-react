import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    toggleHideDone,
    setAllDone,
    selectAreTasksEmpty,
    selectHideDone,
    selectIsEveryTaskDone,
} from "../../tasksSlice";
import FetchExampledTasksButton from "../FetchExampledTasksButton";
import { Wrapper, Button } from "./styled";


const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <Wrapper>
            <FetchExampledTasksButton />
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
