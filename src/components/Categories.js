import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="btn btn-status"
      style={{ marginTop: '7rem', color: 'black', fontSize: '25px' }}
      onClick={() => dispatch(checkStatus())}
    >
      Check Status
    </button>
  );
};

export default Categories;
