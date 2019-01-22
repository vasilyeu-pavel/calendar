import React from 'react';
import { connect } from 'react-redux';
import Day from './Day';
import EventsModal from './EventsModal';
import { setModalCoords, updateDay } from '../../actions';
import { chunkArray } from '../../helpers';
// import PropTypes from 'prop-types';

const DaysList = (props) => {
        const { days, currentYear, currentMonth } = props;
        return (
            <div className='calendar'>
                {chunkArray(days[`${currentYear}${currentMonth}`], 7).map(week =>
                    <div className='calendar-week'>
                        {week.map(day =>
                            <Day
                                day={day}
                                key={day.id}
                                {...props}
                            />
                        )}
                    </div>
                )}
                <EventsModal />
            </div>
        )
}

export default connect((state) => ({
    days: state.days,
    currentMonth: state.currentDate.currentMonth,
    currentYear: state.currentDate.currentYear,
}), { setModalCoords, updateDay })(DaysList)
