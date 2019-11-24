export default function reducer(state, action) {
    if(state === undefined) {
        return 0;
    }
    switch(action.type) {
        case 'INC': 
            return state + 1;

        case 'DEC':
            return state - 1;

        case 'RND':
            return state + action.payload;

        default:
            return state;
    }
};