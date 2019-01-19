import React, { Component } from 'react';
import { connect } from 'react-redux';
import Day from './Day';
import EventsModal from './EventsModal';
import { setModalCoords, updateDay } from '../../actions';
// import PropTypes from 'prop-types';

class DaysList extends Component {
    render() {
        const { days } = this.props;
        return (
            <div className='calendar-row'>
                {days.map(day =>
                    <Day
                        day={day}
                        key={day.id}
                        setModalCoords={this.props.setModalCoords}
                        updateDay={this.props.updateDay}/>
                )}
                <EventsModal />
            </div>
        )
    }
}

export default connect((state) => ({
    days: state.days
}), { setModalCoords, updateDay })(DaysList)
