import React, { useContext, useState, useEffect } from 'react'
import NotesContext from '../context/notes-context'

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

//args = destructured props
const Note = ({note}) => {
    const { dispatch } = useContext(NotesContext)

    const position = useMousePosition()
    // useEffect(() => {
    //     console.log("aloha")

    //     //use a function to clean up effects - componentDidUnmount
    //     return () => {
    //         console.log("cleaning up effect")
    //     }
    // },[])

    return (
        <div key={note.title}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <p>{position.x}, {position.y}</p>
            {/* <button onClick={() => removeNote(note.title)}>x</button> */}
            <button onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title})}>x</button>
        </div>
    )
}

export { Note as default }