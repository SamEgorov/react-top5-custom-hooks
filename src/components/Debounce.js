import React, {useState} from "react";
import useDebounce from "../hooks/useDebounce";

export default function Debounce(){
    const [value, setValue] = useState('')

    const debouncedSearch = useDebounce(search, 500 )

    function search(query)  {
        fetch(`https://jsonplaceholder.typicode.com/todos/?q=${query}`)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    function onChange(e) {
        setValue(e.target.value)
        debouncedSearch(e.target.value)
    }

    return (
        <div>
            <input type="text" value={value} onChange={onChange}/>
            <h2>{value}</h2>
        </div>
    )
}
