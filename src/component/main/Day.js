import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Day extends Component {
    constructor(props) {
        super(props);

        this.dayItem = React.createRef();
    }

    getCoords = (e) => {
        const { day } = this.props;
        const box = e.getBoundingClientRect();

        const body = document.body;
        const docEl = document.documentElement;

        const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

        const clientTop = docEl.clientTop || body.clientTop || 0;
        const clientLeft = docEl.clientLeft || body.clientLeft || 0;

        const top = box.top + scrollTop - clientTop;
        const left = box.left + scrollLeft - clientLeft;

        return {
            top: top,
            left: left + day.height + 90,
        };
    };

    addEvents = () => {
        const { currentMonth, currentYear, setModalCoords, updateDay, day } = this.props;
        if (!day.day) return;
        const coords = this.getCoords(this.dayItem.current);
        setModalCoords(coords.left, coords.top);
        updateDay(day.id, currentYear, currentMonth);
    };

    render() {
        const { day, currentDay } = this.props;

        const border = day.day && (day.found || currentDay === day.day.getDate()) ? { border: '1px solid #87CEFA', background: '#F5F5F5' } : null;

        return (
            <div
                className='calendar-item calendar-day'
                style={{ height: day.height, ...border }}
                onClick={this.addEvents}
                ref={this.dayItem}
            >
                <div className='calendar-day-number'>{day.day ? day.day.getDate() : null}</div>
                <div className='calendar-day-title'>{day.events}</div>
                <div className='calendar-day-users'>{day.users}</div>
            </div>
        )
    }
}

export default Day;
