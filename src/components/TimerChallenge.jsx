import {useRef, useState} from "react";
import ResultModel from "./ResultModel.jsx";


function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        handleStop();
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevState => prevState - 10)
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current)
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);

    }

    return (<>
        <ResultModel
            ref={dialog}
            targetTime={targetTime}
            reaminingTime={timeRemaining}
            onReset={handleReset}
        />
        <section className={'challenge'}>
            <h2>{title}</h2>
            <p className={'challenge-time'}>{targetTime} second{targetTime > 1 ? 's' : ''}</p>
            <p>
                <button
                    onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : ''}>
                {timerIsActive ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    </>);
}

export default TimerChallenge;