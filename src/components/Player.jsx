import {useRef, useState} from "react";

export default function Player() {

    const name = useRef();
    const [enteredName, setEnteredName] = useState(null);

    const handleSubmitClick = () => setEnteredName(name.current.value);

    return (
        <section id="player">
            <h2>Welcome {enteredName ?? "unknown Entity"}</h2>
            <p>
                <input ref={name} type="text"/>
                <button onClick={handleSubmitClick}>Set Name</button>
            </p>
        </section>
    );
}
