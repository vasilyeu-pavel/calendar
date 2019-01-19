import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectItemHeight } from '../../actions';
// import PropTypes from 'prop-types';

class CalendarHeader extends Component {
    constructor(props) {
        super(props);

        this.calendarItem = React.createRef();

        this.state = {
            height: null,
        }
    }

    componentDidMount () {
        const { selectItemHeight } = this.props;
        const height =  this.calendarItem.current.offsetWidth - ( this.calendarItem.current.offsetWidth / 100 * 11);
        this.setState({ height });
        selectItemHeight(height);
    }

    render() {
        const { height } = this.state;

        return (
            <div className='main-calendar'>
                <div className='calendar-item' ref={this.calendarItem} style={{ height }}>
                    <span className='calendar-week'>Понедельник</span>
                </div>
                <div className='calendar-item' style={{ height }}>
                    <span className='calendar-week'>Вторник</span>
                </div>
                <div className='calendar-item' style={{ height }}>
                    <span className='calendar-week'>Среда</span>
                </div>
                <div className='calendar-item' style={{ height }}>
                    <span className='calendar-week'>Четвер</span>
                </div>
                <div className='calendar-item' style={{ height }}>
                    <span className='calendar-week'>Пятница</span>
                </div>
                <div className='calendar-item' style={{ height }}>
                    <span className='calendar-week'>Суббота</span>
                </div>
                <div className='calendar-item' style={{ height }}>
                    <span className='calendar-week'>Воскресенье</span>
                </div>
            </div>
        )
    }
}

export default connect(null, { selectItemHeight })(CalendarHeader);
