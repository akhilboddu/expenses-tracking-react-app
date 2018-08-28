import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters' 
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Gas Bill', createdAt:1500, createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109600 }));
// store.dispatch(setTextFilter('bill'));

// setTimeout( () => {
//     store.dispatch(setTextFilter('water'));
// }, 3000);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
   
);

ReactDOM.render(jsx, document.getElementById('app'));
