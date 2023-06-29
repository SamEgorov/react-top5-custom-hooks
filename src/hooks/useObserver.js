import {useEffect, useRef} from "react";

export default function useObserver (ref, isLoading, canLoad, callback) {
    const observer = useRef()

    useEffect(() => {
        if(isLoading) return;
        // Remove previous observer with saved page number
        if(observer.current) observer.current.disconnect();

        const callFunc = function(entries) {
            // Checks if observable element is intersecting and our condition is true
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        };
        // Create observer
        observer.current = new IntersectionObserver(callFunc);
        // Specify element to observe
        observer.current.observe(ref.current)

    }, [isLoading])
}
