# Top 5 custom React hooks

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## useInput

A hook for creation the controlled input

### Usage:

```javascript
const login = useInput('')

...

input
type = "text"
placeholder = 'Login'
{...
    login
}
/>
```

## useHover

A hook for controlling the hover of an element

### Usage

```javascript
const ref = useRef()
const isHovering = useHover(ref)

...

<div ref={ref} style={{backgroundColor: isHovering ? 'green' : 'red'}}>
</div>
```

## useDebounce

A hook for delayed call of the callback function

### Usage

```javascript
const debouncedCall = useDebounce(callback, 500)

function onChange(e) {
    debouncedCall(e.target.value)
}

...

<input type="text" value={value} onChange={onChange}/>
```

## useScroll (Infinite pagination)

A hook for creation the infinite pagination

### Usage

```javascript
const parentRef = useRef()
const childRef = useRef()

useScroll(parentRef, childRef, callback)

...

<div ref={parentRef}>
    {items.map(item =>
        <div key={item.id}>
            {item.id}. {item.title}
        </div>
    )}
    <div ref={childRef}></div>
</div>
```

## useRequest

A hook for the API requests with control of loading state

### Usage

```javascript
const [resultData, isLoading, error] = useRequest(fetchTodos)

...

return (
    <div>
        {!isLoading
            resultData.map(...)
        }
    </div>
)
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
