import React, {useState} from 'react';
import useInput from "./hooks/useInput";

const App = () => {
    const login = useInput('')
    const pass = useInput('')

    return (
        <div>
            <h2>{login.value}</h2>
            <h2>{pass.value}</h2>
            <input type="text" placeholder='Login' {...login} />
            <input type="password" placeholder='Password' {...pass} />
        </div>
    );
};

export default App;
