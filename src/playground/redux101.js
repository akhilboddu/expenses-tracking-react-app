import { createStore } from 'redux';

//Action Generators - takes input in and returns basic output
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy

});

const set = ({ setCount } = {}) => ({
    type: 'SET',
    setCount
});

const reset = () => ({
    type: 'RESET'
});

// REDUCERS 
const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy 
            };
        case 'SET':
            return {
                count: action.setCount
            };
        case 'RESET':
            return {
                count: 0 
            };
        default:
            return state;
    }  
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
});
 
store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy:5 }));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 5}));

store.dispatch(set({ setCount: 100}));

store.dispatch(reset());



