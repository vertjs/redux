import {createStore} from 'redux'

function reducer(state, action) {
    if(state === undefined) {
        return 0;
    }
    switch(action.type) {
        case 'INC': 
            return state + 1;
        default:
            return state;
    }
}
let store = createStore(reducer)
console.log(store.getState()) // 1-й вызов, инициализация
store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})
console.log(store.getState()) // 2-й вызов, измененного store
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                