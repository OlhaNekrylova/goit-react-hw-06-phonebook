import { useSelector, useDispatch } from "react-redux";
import React from 'react';

import {setFilter} from "../../redux/filter/filter-slice";
import {getFilter} from "../../redux/filter/filter-selectors";

import styles from './Filter.module.css';

const Filter = () => {
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    const handleFilter = ({ target }) => {
        dispatch(setFilter(target.value))
    };

    return (
        <label className={styles.filterLabel}>
            Find contacts by name
            <input
                className={styles.filterInput}
                type="text"
                value={filter}
                onChange={handleFilter}
                required
            />
        </label>
    ); 
};

export default Filter;