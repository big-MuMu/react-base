export function combineReducers(obj) {
    var keys = Object.keys(obj);
    var finalState = {};
    return function reducer(state = {}, action) {

        for (var i = 0; i < keys.length; i++) {
            finalState[keys[i]] = obj[keys[i]](state[keys[i]], action)
        }

        return finalState;
    }
}

// function combineReducer (obj) {
//     const keys = Object.keys(obj);
//     var finalState = {}
//     return (state = {}, action) => {

//         for (var i = 0; i < keys.length; i==) {
//             finalState[keys[i]] = obj[keys[i]](state[keys[i]], action)
//         }
//         return finalState;
//     }
// }