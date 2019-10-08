import React, { useContext } from 'react'
import Note from './Note'
import NotesContext from '../context/notes-context'

const NoteList = () => {
    const { notes } = useContext(NotesContext)

    //{/* convert array of objects into an array of jsx */}
    return notes.map((note) => (
        <Note key={note.title} note={note}/>
    ))
}

export { NoteList as default }