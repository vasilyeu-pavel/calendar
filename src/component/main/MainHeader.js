import React from 'react';
// import PropTypes from 'prop-types';
import ChevronLeft from "react-feather/dist/icons/chevron-left";
import ChevronRight from "react-feather/dist/icons/chevron-right";
import { connect } from 'react-redux';
import { nextMonth } from "../../actions";
import { previousMonth } from "../../actions";

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const MainHeader = ({ currentMonth, currentYear, nextMonth, previousMonth }) => {
    return (
        <div className='main-header'>
            <span
                className='day-item previous'
                onClick={() => previousMonth(currentMonth, currentYear)}
            >
                <ChevronLeft width={12} height={12} />
            </span>
            <span className='day'>
                {months[currentMonth]}, {currentYear}
            </span>
            <span
                className='day-item next'
                onClick={() => nextMonth(currentMonth, currentYear)}
            >
                <ChevronRight width={12} height={12} />
            </span>
            <span className='day-text'>
                Сегодня
            </span>
        </div>
    )
};

export default connect((state) => ({
    currentMonth: state.currentDate.currentMonth,
    currentYear: state.currentDate.currentYear,
}), { nextMonth, previousMonth })(MainHeader);
