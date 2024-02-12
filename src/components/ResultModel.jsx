import {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";

const ResultModel = forwardRef(({targetTime, reaminingTime, onReset}, ref) => {

    const dialog = useRef();

    const userLost = reaminingTime <= 0;
    const formattedRemainingTime = (reaminingTime / 1000).toFixed(2);
    const result = Math.round((1 - reaminingTime / (targetTime *1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            }
        }
    })

    return (
        createPortal(
        <dialog ref={dialog} className={'result-modal'}>
        {userLost && <h2>You Lost</h2>}
        {!userLost && <h2>Your Score: {result}</h2>}
        <p>The Target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
        <form method={'dialog'}>
            <button onClick={onReset}>Close</button>
        </form>
    </dialog>,document.getElementById('modal')));
});

export default ResultModel;