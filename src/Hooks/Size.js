import { useState, useEffect } from 'react'

const useWindowHeight = () => {
    const [windowHeight, setWindowHeight] = useState({
        height: undefined,
        width: undefined,
        scrollY: undefined,
        pageYOffset: undefined,
    });

    useEffect(() => {
        const handleHeight = () => {
            setWindowHeight({
                height: window.innerHeight,
                width: window.innerWidth,
                scrollY: window.scrollY,
                pageYOffset: window.pageYOffset,
            })
        }

        window.addEventListener("scroll", handleHeight);
        handleHeight();

        return () => window.removeEventListener("scroll", handleHeight)

    }, [])
    return windowHeight
}

export default useWindowHeight