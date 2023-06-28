import React, {useState} from 'react';
import useInput from "./hooks/useInput";

const App = () => {
    const login = useInput('')
    const pass = useInput('')

    return (
        <div>
            <h1>{login.value}</h1>
            <input type="text" placeholder='Login' onChange={(e) => login.onChange(e)} value={login.value}/>
            <input type="password" placeholder='Password' onChange={(e) => pass.onChange(e)} value={pass.value}/>
        </div>
    );
};

export default App;
