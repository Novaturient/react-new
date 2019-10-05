import React, { useState } from 'react';
import ReactDOM from 'react-dom';
/* import './index.css';
import App from './App'; */
import * as serviceWorker from './serviceWorker';

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

// const App = (props) => {

//     const [count, setCount] = useState(props.count);
//     const [text, setText] = useState('');

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

ReactDOM.render(<Appq count={2}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
