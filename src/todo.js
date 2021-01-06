import React, { useState } from 'react';
import { createStore } from 'redux';
// import { createStore } from './redux/createStore';
import combi from './store/reducer';


// const reducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREASE':
//             return state + 1;
//             break;

//         case 'REDUCE':
//             return state - 1;
//             break;
    
//         default:
//             return state;
//             break;
//     }
// }
const store = createStore(combi);
console.log(99, combi, store.getState());

const Todo = (props) => {
    const [count, setCount] = useState(0);
    store.subscribe(() => {
        setCount(store.getState().todoReducer);
    });
    return (
        <>
            <p>{count}</p>
            <button onClick={() => {
                store.dispatch({type: 'INCREASE'})
            }}>+</button>
            <button onClick={() => {
                store.dispatch({type: 'REDUCE'})
            }}>-</button>
        </>
    )
}

export default Todo;