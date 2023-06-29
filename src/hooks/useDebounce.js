import {useCallback, useRef} from "react";

export default function useDebounce(callback, delay) {
    const timer = useRef()

    // Creates function that will be called only once or after change callback or delay
    // useCallback caches the function between renders
    const debouncedCallback = useCallback((...args) => {
        /** If callback is changed (it means customer changing the query)
         * call clearTimeout - will recreate function and delay call our callback
         * Thus function callback will be triggered by timeout only when customer will stop typing on delay seconds
         */
        if (timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)

    }, [callback, delay])

    return debouncedCallback
}
