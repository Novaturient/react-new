import {useState, useEffect} from 'react'

//naming convention to start variables with use when using custom hooks
const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y:0})
    console.log("Setting up event")
    useEffect(() => {

        const handleMouseMove = (e) => {
                setPosition({
                    x: e.pageX,
                    y: e.pageY
                })
            }
        
        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove )
        }

    }, [])

    return position
}

export { useMousePosition as default }