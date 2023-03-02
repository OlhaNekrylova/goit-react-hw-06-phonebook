import { useSelector, useDispatch } from "react-redux";
import React from 'react';
import PropTypes from 'prop-types';

import {setFilter} from "../../redux/filter/filter-slice";
import {getFilter} from "../../redux/filter/filter-selectors";

import css from './Filter.module.css';

const Filter = () => {
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    const handleFilter = ({ target }) => {
        dispatch(setFilter(target.value))
    };

    return (
        <label className={css.filterLabel}>
            Find contacts by name
            <input
                className={css.filterInput}
                type="text"
                // value={value}
                // onChange={onChange}
                value={filter}
                onChange={handleFilter}
                // required
            />
        </label>
    ); 
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;