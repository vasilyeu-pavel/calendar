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
            left: left + day.height + 30,
        };
    };

    addEvents = () => {
        const coords = this.getCoords(this.dayItem.current);
        this.props.setModalCoords(coords.left, coords.top);
        this.props.updateDay(this.props.day.id);
    };

    render() {
        const { day } = this.props;
        if (!day.height) return null;

        return (
            <div className='calendar-item calendar-day' style={{ height: day.height }} onClick={this.addEvents} ref={this.dayItem}>
                <div className='calendar-day-number'>{day.day}</div>
                <div className='calendar-day-title'>{day.events}</div>
                <div className='calendar-day-users'>{day.users}</div>
            </div>
        )
    }
}

export default Day;
