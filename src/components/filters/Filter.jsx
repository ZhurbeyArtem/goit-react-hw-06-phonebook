import React from 'react';
import s from './style.module.css';

const Filter = ({ filterFunc, filter }) => {
  return (
    <div className={s.container}>
      <label className={s.formLabel}>
        Find contact by name
        <input type="text" defaultValue={filter} onInput={e => filterFunc(e.target.value)} />
      </label>
    </div>
  );
};

export default Filter;
