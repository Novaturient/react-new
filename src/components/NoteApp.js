import React, { useEffect, useReducer } from 'react'
import notesReducer from '../reducers/notes'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'

const NoteApp = () => {
    // const [notes, setNotes] = useState([])
    const [notes, dispatch] = useReducer(notesReducer, [])

    //usually asynchronous call; usually used when fetching data from db
    useEffect(() => {
        console.log("once only")
        const notes = JSON.parse(localStorage.getItem('notes'))
        if(notes){
            dispatch({ type: 'POPULATE_NOTES',  notes })
            // setNotes(notesData)
        }
    },[])

    const removeNote = (title) => {
        console.log("removing note...")
        dispatch({
            type: 'REMOVE_NOTE',
            title
        })
        // setNotes(notes.filter((note) => note.title !== title ))
    }

    useEffect(() => {
        console.log("adding notes to localStorage")
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <div>
            <h1>My Notes</h1>
            <NoteList notes={notes} removeNote={removeNote}/>
            <p>Add Notes</p>
            <AddNoteForm dispatch={dispatch}/>

        </div>
    )
}

export { NoteApp as default }