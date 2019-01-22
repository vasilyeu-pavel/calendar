import React from 'react';
import { connect } from 'react-redux';
import { updateCurrentState } from '../../actions';
// import PropTypes from 'prop-types';


const UpdateButton = ({ updateCurrentState }) => {
    return (
        <div>
            <input
                className='button add-button'
                type='button'
                value='Обновить'
                onClick={() => updateCurrentState()}
            />
        </div>
    )
};

export default connect(null, { updateCurrentState })(UpdateButton);
