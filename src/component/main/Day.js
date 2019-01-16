import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Day extends Component {
    constructor(props) {
        super(props);

        this.calendarItem = React.createRef();

        this.state = {
            height: null,
        }
    }

    componentDidMount () {
        this.setState({ height: this.calendarItem.current.offsetWidth });
    }

    render() {
        const { height } = this.state;
        const { day } = this.props;

        return (
            <div className='calendar-item' ref={this.calendarItem} style={{ height }}>
                {day.day}
            </div>
        )
    }
}

export default Day
