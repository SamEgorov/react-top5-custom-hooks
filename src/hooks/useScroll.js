import {useEffect, useRef} from "react";

export default function useScroll(parentRef, childRef, callback) {
    // Intersection observer - для отслеживания видимости элемента на странице
    const observer = useRef()

    useEffect(() => {
        const options = {
            // root-родительский объект со скроллом в котором отслеживаем
            // (если это весь документ, то можно пропустить)
            root: parentRef.current ,
            rootMargin: "0px",
            // 0 - функция отработает как только объект появился частично, а 1.0 - когда полностью
            threshold: 0,
        };

        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log('intersected')
                callback()
            }
        }, options)

        // Указываем за каким элементом наблюдаем
        observer.current.observe(childRef.current)

        return function () {
            observer.current.unobserve(childRef.current)
        }
    }, [callback])
} 