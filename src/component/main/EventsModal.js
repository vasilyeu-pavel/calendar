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
        const { days, currentMonth, currentYear } = this.props;
        const [filteredDay] = days[`${currentYear}${currentMonth}`].filter(day => day.update);
        if (filteredDay) {
            const { date, events, users, description } = filteredDay;
            this.setState({
                day: date, events, users, description
            });
        }
    }

    handleEvents = (e) => {
        this.setState({ events: e.target.value })
    };

    handleDay = (e) => {
        this.setState({ day: e.target.value })
    };

    handleUsers = (e) => {
        this.setState({ users: e.target.value })
    };

    handleDescription = (e) => {
        this.setState({ description: e.target.value })
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
        const { days, submitEvents, closeModal, currentMonth, currentYear } = this.props;
        const [filteredDay] = days[`${currentYear}${currentMonth}`].filter(day => day.update);
        closeModal(filteredDay.id, currentMonth, currentYear);
        if (!events.length && !day.length && !description.length && !users.length) return;
        submitEvents(events, day, users, description, filteredDay.id, currentMonth, currentYear);
        this.resetState();
    };

    handleRemove = () => {
        const { currentMonth, currentYear } = this.props;
        const filteredDay = this.props.days[`${currentYear}${currentMonth}`].filter(day => day.update)[0];
        this.props.submitEvents('', '', '', '', filteredDay.id, currentMonth, currentYear);
        this.props.closeModal(filteredDay.id, currentMonth, currentYear);
        this.resetState();
    };

    render() {
        const { modal, closeModal, days, currentMonth, currentYear } = this.props;
        const open = modal.isOpen ? { visibility: 'visible'} : { visibility: 'hidden'};
        const coords = { left:  `${modal.left}px`, top:  `${modal.top}px`, };

        return (
            <div className='events-modal' style={{...open, ...coords}}>
                <div className='events-modal-head'>
                    <div className='events-modal-head-input'>
                        {days[`${currentYear}${currentMonth}`].filter(day => day.update)[0]
                        && !days[`${currentYear}${currentMonth}`].filter(day => day.update)[0].events.length
                        && !days[`${currentYear}${currentMonth}`].filter(day => day.update)[0].day.length
                        && !days[`${currentYear}${currentMonth}`].filter(day => day.update)[0].users.length
                            ?
                            <div>
                                <input
                                    value={this.state.events}
                                    type='text'
                                    placeholder='Событие'
                                    onChange={this.handleEvents}
                                />
                                <input
                                    type = 'text'
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
                            : <div>
                                <div className='modal-title'>{this.state.events}</div>
                                <div className='modal-date'>{this.state.day}</div>
                                <div>
                                    <div style={{ fontSize: '11px' }}>Участники:</div>
                                    <div>{this.state.users}</div>
                                </div>
                            </div>
                        }

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
                          closeModal(days[`${currentYear}${currentMonth}`].filter(day => day.update)[0].id, currentMonth, currentYear);

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
    modal: state.modal,
    currentMonth: state.currentDate.currentMonth,
    currentYear: state.currentDate.currentYear,
}), { closeModal, submitEvents })(EventsModal);
