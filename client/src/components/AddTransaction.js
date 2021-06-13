import { useState } from 'react';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../redux/actions/transactionsAction';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();

  const onAddTransaction = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuid(),
      text,
      amount: +amount,
    };

    dispatch(addTransaction(newTransaction));
    setText('');
    setAmount('');
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn' onClick={onAddTransaction}>
          Add transaction
        </button>
      </form>
    </>
  );
};
