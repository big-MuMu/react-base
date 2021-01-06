export const userReducer = (state = 0, action) => {
    switch (action.type) {
        case 'LIKE':
            return state + 1;
            break;

        case 'UNLIKE':
            return state - 1;
            break;
    
        default:
            return state;
            break;
    }
}