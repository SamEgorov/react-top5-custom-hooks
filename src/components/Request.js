import useRequest from "../hooks/useRequest";
import axios from "axios";
import React from "react";

const Request = () => {
    const [todos, loading, error] = useRequest(fetchTodos)

    function fetchTodos()  {
        return axios.get('https://jsonplaceholder.typicode.com/todos')
    }

    if (loading) {
        return <h2>Loading data...</h2>
    }

    if (error) {
        return <h2>An error occurred during the loading</h2>
    }

    return (
        <div>
            {todos && todos.map(item =>
                <div key={item.id} style={{padding: 30, border: '2px solid black'}}>
                    {item.id}. {item.title}
                </div>
            )}
        </div>
    )
}

export default Request;
