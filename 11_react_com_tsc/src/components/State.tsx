import React, {useState, ChangeEvent} from "react";

// onChange={} - sempre que alguem digita alguma coisa ele dispara uma função

const State = () => {

    const [text, setText] = useState<string | null>(null)

    // e - controla o evento, o valor que está vindo do input
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    return (
        <div>
            <p>O texto é:  {text}</p>
            <input type="text" onChange={handleChange}/>
        </div>
    )
}

export default State