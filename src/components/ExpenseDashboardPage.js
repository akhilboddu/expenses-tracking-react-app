import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpsenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList/>
    </div>
);

export default ExpsenseDashboardPage;