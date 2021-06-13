import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../redux/actions/transactionsAction';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { numberWithCommas } from '../utils/format';

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount > 0 ? '+' : '-';

  const dispatch = useDispatch();
  const onDeleteTransaction = () => {
    dispatch(deleteTransaction(transaction._id));
  };

  return (
    <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
      {transaction.text}{' '}
      <span>
        {' '}
        {`${sign}${numberWithCommas(Math.abs(transaction.amount))}$`}
      </span>
      <button className='delete-btn' onClick={onDeleteTransaction}>
        <DeleteForeverIcon />
      </button>
    </li>
  );
};
