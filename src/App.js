import React, {useState} from 'react';
import useInput from "./hooks/useInput";

const App = () => {
    const name = useInput('John')

    return (
        <div>
            <h1>{name.value}</h1>
            <input type="text" onChange={(e) => name.onChange(e)} value={name.value}/>
        </div>
    );
};

export default App;
