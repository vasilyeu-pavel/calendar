import React, { Component } from 'react';
import AddEventForm from './AddEventForm';
// import PropTypes from 'prop-types';


class AddButton extends Component {
    state = {
      isOpen: false,
    };

    handleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        return (
            <div>
                <input className='button update-button'
                       type='button'
                       value='Добавить'
                       onClick={this.handleOpen}
                />
                <AddEventForm handleOpen={this.handleOpen} isOpen={this.state.isOpen}/>
            </div>
        )
    }
}

export default AddButton
