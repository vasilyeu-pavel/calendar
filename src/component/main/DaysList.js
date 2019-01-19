import React, { Component } from 'react';
import { connect } from 'react-redux';
import Day from './Day';
import EventsModal from './EventsModal';
// import PropTypes from 'prop-types';

class DaysList extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const { days } = this.props;

        return (
            <div className='calendar-row'>
                {days.map(day => <Day day={day} key={day.id} />)}
                <EventsModal />
            </div>
        )
    }
}

export default connect((state) => ({
    days: state.days
}))(DaysList)
