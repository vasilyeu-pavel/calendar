import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ChevronLeft from "react-feather/dist/icons/chevron-left";
import ChevronRight from "react-feather/dist/icons/chevron-right";

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

class MainHeader extends Component {
    render() {
        return (
            <div className='main-header'>
                <span className='day-item previous'>
                    <ChevronLeft width={12} height={12} />
                </span>
                <span className='day'>
                    {months[new Date().getMonth()]}, {new Date().getFullYear()}
                </span>
                <span className='day-item next'>
                    <ChevronRight width={12} height={12} />
                </span>
                <span className='day-text'>
                    Сегодня
                </span>
            </div>
        )
    }
}

export default MainHeader
