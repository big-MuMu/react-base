import React from 'react';

// utilsjs
function useForceUpdate() {
    const [, forceUpdate] = React.useState(false);
  
    return React.useCallback(() => {
      forceUpdate(s => !s);
    }, []);
}

// 单个 useState
// var state;
// export function useMyState(initialValue) {
//     const forceUpdate = useForceUpdate();
//     state = state || initialValue;
//     function setState(value) {
//         state = value;
//         forceUpdate()
//     }
//     return [state, setState];
// }

// 多个 useState

var state = [];
var index = 0;

export function useMyState(initialValue) {
    console.count('mm')
    state[index] = state[index] !== undefined ? state[index] : initialValue;
    const forceUpdate = useForceUpdate();
    const cI = index;
    const setState = (value) => {
        state[cI] = value;
        console.log(999, state)
        forceUpdate();
        index = 0
    }
    index++;
    return [state[cI], setState];
}


