import React, { useEffect } from 'react';
import { Transaction } from './Transaction';

import { useSelector, useDispatch } from 'react-redux';
import { getTransactions } from '../redux/actions/transactionsAction';

export const TransactionList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  const transactions = useSelector(
    (state) => state.transactionsState.transactions
  );

  console.log(transactions);

  return (
    <>
      <h3>History</h3>
      {!transactions.length ? (
        <label>You have no transactions yet.</label>
      ) : (
        <ul className='list'>
          {transactions.map((transaction) => (
            <Transaction key={transaction._id} transaction={transaction} />
          ))}
        </ul>
      )}
    </>
  );
};
