import React from 'react'
import Note from './Note'

const NoteList = ({ notes, removeNote}) => {
    //{/* convert array of objects into an array of jsx */}
    return notes.map((note) => (
        <Note key={note.title} note={note} removeNote={removeNote}/>
    ))
}

export { NoteList as default }