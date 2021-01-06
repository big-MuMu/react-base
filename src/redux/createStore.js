function createStore(reducer, state) {
    var currentstate = state;
    var currentReducer = reducer;
    var listeners = [];

    function dispatch(action) {
        currentstate = currentReducer(currentstate, action);

        listeners.forEach(l => {
            l()
        })
    }

    function subscribe(cb) {
        listeners.push(cb);
    }

    function getState() {
        return currentstate;
    }

    return {
        dispatch,
        subscribe,
        getState
    }
}

export { createStore };
return
// function createStore(reducer, state) {
//     var currentState = state;
//     var currentReducer = reducer;
//     var listeners = [];

//     function getState() {
//         return currentState
//     }

//     function dispatch(action) {
//         currentState = currentReducer(currentstate, action);
//         for (var i = 0; i < listeners.length; i++) {
//             listeners[i]();
//         }
//     }

//     function subscribe(cb) {
//         listeners.push(cb);
//     }

//     return {
//         dispatch,
//         getState,
//         subscribe
//     }
// }
