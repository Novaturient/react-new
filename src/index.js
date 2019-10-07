import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
/* import './index.css';
import App from './App'; */
import * as serviceWorker from './serviceWorker';

const Notes = () => {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNote = (e) => {
        e.preventDefault()
        setNotes([
            ...notes, { title, body }
        ])
        setTitle('')
        setBody('')
    }

    //usually asynchronous call; usually used when fetching data from db
    useEffect(() => {
        console.log("once only")
        const notesData = JSON.parse(localStorage.getItem('notes'))
        if(notesData){
            setNotes(notesData)
        }
    },[])

    const removeNote = (title) => {
        console.log("removing note...")
        setNotes(notes.filter((note) => note.title !== title ))
    }

    useEffect(() => {
        console.log("adding notes to localStorage")
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <div>
            <h1>My Notes</h1>
            {/* convert array of objects into an array of jsx */}
            {notes.map((note) => (
                <div key={note.title}>
                    <h3>{note.title}</h3>
                    <p>{note.body}</p>
                    {/* <button onClick={() => removeNote(note.title)}>x</button> */}
                    <button onClick={() => removeNote(note.title)}>x</button>
                </div>

            ))}
            <p>Add Notes</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />
                <button>add</button>
            </form>

        </div>
    )
}


// const App = (props) => {

//     const [count, setCount] = useState(props.count);
//     const [text, setText] = useState('');

//     //complete mirror of componentDidMount
//     //use this just once, useful for reading API
//     useEffect(() => {
//         console.log("this should only run once.")
//     }, [])

//     //accepts optional array as a second argument
//     //explicitly list out dependencies
//     useEffect(() => {
//         console.log("haler")
//         document.title = count;
//     },[count])

//     return (
//         <div>
//             <p>Hello, current {text || 'count'} is currently {count}.</p>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//             <button onClick={() => setCount(props.count)}>reset</button>
//             <button onClick={() => setCount(count - 1)}>-1</button>
//             <input type="text" onChange={(e) => setText(e.target.value)}/>
//         </div>
//     )
// }

// App.defaultProps = {
//     count: 0
// }







// const Appq = (props) => {

//     const [state, setState] = useState({
//         count: props.count,
//         text: ''
//     });

//     return (
//         <div>
//             <p>Hello, current {state.text || 'count'} is currently {state.count}.</p>
//             <button onClick={() => setState({...state, count: state.count + 1})}>+1</button>
//             <button onClick={() => setState(props.count)}>reset</button>
//             <button onClick={() => setState({...state, count: state.count - 1})}>-1</button>
//             <input type="text" onChange={(e) => setState({...state, text: e.target.value})}/>
//         </div>
//     )
// }


// ReactDOM.render(<Appq count={2}/>, document.getElementById('root'));
ReactDOM.render(<Notes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
