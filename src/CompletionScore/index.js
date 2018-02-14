import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class CompletionScore extends PureComponent {
    render() {
        const {
            bullets = [],
            completed = 0
        } = this.props;
  
        return (
            <ul className="comp-score">
            {bullets.map((bullet, idx) => {
                const bulletClass = (idx / completed < 1) ? 'done' : '';
                
                return (<li className={bulletClass}></li>);
            })}
            </ul>
        );
    }
}
  
CompletionScore.propTypes = {
    bullets: PropTypes.array.isRequired,
    completed: PropTypes.number
};