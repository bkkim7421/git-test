import React from "react";
import Button from "./Button";

function App() {
    const [value, setValue] = React.useState("OwO");

    const changeValue = () => {
        setValue("Yeah~");
    };

    return (
        <div>
            <h1>God Damn!</h1>
            <Button text={value} fontSize={18} onClick={changeValue} />
        </div>
    );
}

export default App;
