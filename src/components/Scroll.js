import React, {useEffect, useRef, useState} from 'react';
import useFetch from "../hooks/useFetch";
import useObserver from "../hooks/useObserver";
import axios from "axios";

const List = () => {
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0)
    const limit = 20
    const refElement = useRef()

    const [fetchItems, isLoading, error] = useFetch(async (limit, page) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/?_limit=${limit}&_page=${page}`,{
            params: {
                _limit: limit,
                _page: page
            }
        });
        setItems([...items, ...response.data])
        const totalCount = response.headers['x-total-count']
        console.log(totalCount)
        setTotalPages(Math.ceil(totalCount / limit))
    })

    // When we see refElement on the page, will be triggered setPage function.
    // It will run useEffect below to get items from next page
    useObserver(refElement, isLoading, page < totalPages, () => {
        setPage(page + 1)
    })

    // Calls API request for items from next page, when variable 'page' is changed
    useEffect(() => {
        fetchItems(limit, page);
    }, [page]);

    if (error) {
        return <h2>An error occurred during API request</h2>
    }

    return (
        <div style={{height: '80vh', overflow: 'auto'}}>
            {items.map(item =>
                <div key={item.id} style={{padding: 30, border: '2px solid black'}}>
                    {item.id}. {item.title}
                </div>
            )}
            <div ref={refElement} style={{height:20, backgroundColor: 'red'}}>Observed element</div>
        </div>
    );
};

export default List;
