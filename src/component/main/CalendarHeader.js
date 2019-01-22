import React  from 'react';
// import PropTypes from 'prop-types';

const CalendarHeader = () => {
    return (
        <div className='main-calendar'>
            <div className='calendar-item'>
                <span className='calendar-week'>Понедельник</span>
            </div>
            <div className='calendar-item'>
                <span className='calendar-week'>Вторник</span>
            </div>
            <div className='calendar-item'>
                <span className='calendar-week'>Среда</span>
            </div>
            <div className='calendar-item'>
                <span className='calendar-week'>Четвер</span>
            </div>
            <div className='calendar-item'>
                <span className='calendar-week'>Пятница</span>
            </div>
            <div className='calendar-item'>
                <span className='calendar-week'>Суббота</span>
            </div>
            <div className='calendar-item'>
                <span className='calendar-week'>Воскресенье</span>
            </div>
        </div>
    )
};

export default CalendarHeader
