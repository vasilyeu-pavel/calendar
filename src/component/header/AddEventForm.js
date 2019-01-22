import React, { Component } from 'react';
import X from "react-feather/dist/icons/x";
import { connect } from 'react-redux';
import { addEvents } from "../../actions";
// import PropTypes from 'prop-types';


class AddEventForm extends Component {
    state = {
        event: '',
        error: false,
        day: null,
    };

    handleEvent = (e) => {
        if (isNaN(+e.target.value.split(' ')[0])) {
          this.setState({ event: '', error: true, day: null });
          return;
        }
        this.setState({ event: e.target.value, error: false, day: +e.target.value.split(' ')[0] });
    };

    submitForm = () => {
        const { currentMonth, currentYear } = this.props;
        if (this.state.day) {
            this.props.addEvents(this.state.day, this.state.event, currentMonth, currentYear);
        }
        this.setState({ event: '', day: null, error: false });
        this.props.handleOpen();
    };

    render() {
        const { event, error } = this.state;
        const { isOpen, handleOpen } = this.props;
        if (!isOpen) return null;

        const validation = error ? { border: '1px solid red'} : { border: '1px solid #C0C0C0'};

        return (
            <div className='add-event-form'>
                <form onSubmit={this.submitForm}>
                    <input className='add-event-input'
                           type='text'
                           value={event}
                           onChange={this.handleEvent}
                           placeholder='5 марта, 14:00, День рождение'
                           style={validation}
                    />
                    <button className='create-button' onClick={this.submitForm}>Создать</button>
                </form>
                <span className='events-modal-exit'
                      onClick={handleOpen}
                >
                    <X width={12} height={12} />
                </span>
            </div>
        )
    }
}

export default connect((state) => ({
    currentMonth: state.currentDate.currentMonth,
    currentYear: state.currentDate.currentYear,
}), { addEvents })(AddEventForm)
