import React from 'react'

//args = destructured props
const Note = ({note, removeNote}) => {

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
            {/* <button onClick={() => removeNote(note.title)}>x</button> */}
            <button onClick={() => removeNote(note.title)}>x</button>
        </div>
    )
}

export { Note as default }