import React, { Component } from 'react';
import { connect } from 'react-redux';
import X from "react-feather/dist/icons/x";
import { closeModal, submitEvents } from "../../actions";

// import PropTypes from 'prop-types';

class EventsModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: '',
            day: '',
            users: '',
            description: '',
        }
    }

    componentWillReceiveProps() {
        const { days } = this.props;
        const [filteredDay] = days.filter(day => day.update);
        if (filteredDay) {
            const { date, events, users, description } = filteredDay;
            this.setState({
                day: date, events, users, description
            });
        }
    }

    handleEvents = (e) => {
        if (e.target.value && e.target.value.length) {
            this.setState({ events: e.target.value })
        }
    };

    handleDay = (e) => {
        if (e.target.value && e.target.value.length) {
            this.setState({ day: e.target.value })
        }
    };

    handleUsers = (e) => {
        if (e.target.value && e.target.value.length) {
            this.setState({ users: e.target.value })
        }
    };

    handleDescription = (e) => {
        if (e.target.value && e.target.value.length) {
            this.setState({ description: e.target.value })
        }
    };

    resetState = () => {
        this.setState({
            events: '',
            day: '',
            users: '',
            description: '',
        });
    };

    handleSubmit = () => {
        const { events, day, users, description } = this.state;
        const { days, submitEvents, closeModal } = this.props;
        const [filteredDay] = days.filter(day => day.update);
        closeModal(filteredDay.id);
        if (!events.length && !day.length && !description.length && !users.length) return;
        submitEvents(events, day, users, description, filteredDay.id);
        this.resetState();
    };

    handleRemove = () => {
        const filteredDay = this.props.days.filter(day => day.update)[0];
        this.props.submitEvents('', '', '', '', filteredDay.id);
        this.props.closeModal(filteredDay.id);
        this.resetState();
    };

    render() {
        const { modal, closeModal, days } = this.props;
        const open = modal.isOpen ? { visibility: 'visible'} : { visibility: 'hidden'};
        const coords = { left:  `${modal.left}px`, top:  `${modal.top}px`, };

        return (
            <div className='events-modal' style={{...open, ...coords}}>
                <div className='events-modal-head'>
                    <div className='events-modal-head-input'>
                        <input

                            value={this.state.events}
                            type='text'
                            placeholder='Событие'
                            onChange={this.handleEvents}
                        />
                        <input
                            type='text'
                            placeholder='День, месяц, год'
                            value={this.state.day}
                            onChange={this.handleDay}
                        />
                        <input
                            type='text'
                            placeholder='Имена участников'
                            value={this.state.users}
                            onChange={this.handleUsers}
                        />

                    </div>
                </div>
                <div className='events-modal-content'>
                    <textarea
                        type='area'
                        placeholder='Описание'
                        value={this.state.description}
                        onChange={this.handleDescription}
                    />
                </div>
                <div className='events-modal-footer'>
                    <button onClick={this.handleSubmit}>Готово</button>
                    <button onClick={this.handleRemove}>Удалить</button>
                </div>
                <span className='events-modal-exit'
                      onClick={() => {
                          this.resetState();
                          closeModal(days.filter(day => day.update)[0].id);

                      }}
                >
                    <X width={12} height={12} />
                </span>
            </div>
        )
    }
}

export default connect((state) => ({
    days: state.days,
    modal: state.modal
}), { closeModal, submitEvents })(EventsModal);
