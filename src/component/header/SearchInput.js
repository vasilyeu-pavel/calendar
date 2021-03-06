import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchDay } from "../../actions";

// import PropTypes from 'prop-types';


class SearchInput extends Component {
    state = {
        target: '',
    };

    handleSearch = e => {
        const { currentMonth, currentYear } = this.props;
        this.setState({ target: e.target.value });
        this.props.searchDay(e.target.value, currentMonth, currentYear);
    };

    render() {
        const { target } = this.state;
        const { days, currentMonth, currentYear } = this.props;

        const filteredDays = days[`${currentYear}${currentMonth}`].filter(day => day.found);
        const visibility = filteredDays.length ? { visibility: 'visible' } : { visibility: 'hidden' };

        return (
            <div>
                <input
                    className='search-input'
                    value={target}
                    type='text'
                    placeholder='Событие, дата или участник'
                    onChange={this.handleSearch}
                />
                <div className='autosuggest' style={visibility}>
                    {
                        filteredDays.length
                            ? filteredDays.map(day => (
                                <div className='autosuggest-item' key={day.id}>
                                    <div style={{ fontWeight: 'bold' }}>
                                        {day.events}
                                    </div>
                                    <div>
                                        {day.date}
                                    </div>
                                </div>
                            ))
                            :
                            null
                    }
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    days: state.days,
    currentMonth: state.currentDate.currentMonth,
    currentYear: state.currentDate.currentYear,
}), { searchDay })(SearchInput);
