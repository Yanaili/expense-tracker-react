import axios from 'axios';

//axios.defaults.baseURL = 'http://localhost:5000';

export const getTransactions = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/v1/transactions');
    dispatch({
      type: 'GET_TRANSACTIONS',
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error,
    });
  }
};

export const addTransaction = (transaction) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    const res = await axios.post('/api/v1/transactions', transaction, config);
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error,
    });
  }
};

export const deleteTransaction = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/v1/transactions/${id}`);
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error,
    });
  }
};
