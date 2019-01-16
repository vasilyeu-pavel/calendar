import React, { Component } from 'react';
// import PropTypes from 'prop-types';


class SearchInput extends Component {
    render() {
        return (
            <div>
                <input
                    className='search-input'
                    type='text'
                    placeholder='Событие, дата или участник'
                />
            </div>
        )
    }
}

export default SearchInput
