import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

class Main extends React.Component {

    render() {

        return (
            <div>
                <h1>
                    <Link to="/">Reduxtagram</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
};

export default Main;
