import React from 'react';
import MainHeader from './MainHeader';
import CalendarHeader from './CalendarHeader';
import DaysList from './DaysList';
import './index.css';

const Main = () => {
    return (
        <div className='main'>
            <MainHeader />
            <CalendarHeader />
            <DaysList />
        </div>
    );
};

export default Main
