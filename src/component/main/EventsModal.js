import React, { Component } from 'react';
import { connect } from 'react-redux';
import X from "react-feather/dist/icons/x";
import { closeModal } from "../../actions";

// import PropTypes from 'prop-types';

class EventsModal extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { modal, closeModal } = this.props;
        const open = modal.isOpen ? { visibility: 'visible'} : { visibility: 'hidden'};
        const coords = { left:  `${modal.left}px`, top:  `${modal.top}px`, };

        return (
            <div className='events-modal' style={{...open, ...coords}}>
                <div className='events-modal-head'>
                    <div className='events-modal-head-input'>
                        <input type='text' placeholder='Событие' />
                        <input type='text' placeholder='День, месяц, год' />
                        <input type='text' placeholder='Имена участников' />

                    </div>
                </div>
                <div className='events-modal-content'>
                    <textarea type='area' placeholder='Описание' />
                </div>
                <div className='events-modal-footer'>
                    <button>Готово</button>
                    <button>Удалить</button>
                </div>
                <span className='events-modal-exit' onClick={closeModal}><X width={12} height={12} /></span>
            </div>
        )
    }
}

export default connect((state) => ({
    modal: state.modal
}), { closeModal })(EventsModal);
