import React, { Component } from 'react';
import X from "react-feather/dist/icons/x";
// import PropTypes from 'prop-types';


class AddEventForm extends Component {
    state = {
        event: ''
    };

    handleEvent = (e) => this.setState({ event: e.target.value });

    submitForm = () => {
        this.setState({ event: '' });
        this.props.handleOpen();
    };

    render() {
        const { event } = this.state;
        const { isOpen, handleOpen } = this.props;
        if (!isOpen) return null;

        return (
            <div className='add-event-form'>
                <form onSubmit={this.submitForm}>
                    <input className='add-event-input'
                           type='text'
                           value={event}
                           onChange={this.handleEvent}
                           placeholder='5 марта, 14:00, День рождение'
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

export default AddEventForm
