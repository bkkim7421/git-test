import React from "react";
import Button from "./Button";
import Hello from "./Hello";

function App() {
    const [value, setValue] = React.useState("OwO");

    const changeValue = () => {
        setValue("Yeah~");
    };

    return (
        <div>
            <h1>God Damn!</h1>
            <h2>Thanks Goodness</h2>
            <Hello />
            <Button text={value} fontSize={18} onClick={changeValue} />
        </div>
    );
}

export default App;
