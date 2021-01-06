export const todoReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
            break;

        case 'REDUCE':
            return state - 1;
            break;
    
        default:
            return state;
            break;
    }
}