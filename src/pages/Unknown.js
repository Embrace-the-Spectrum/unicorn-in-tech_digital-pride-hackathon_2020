import React from 'react';
import { useHistory } from 'react-router-dom';

import './Unknown.css';


const Unknown = () => {
    const history = useHistory();
    return (
        <section>
            <h2>404</h2>
            <p>Page not found!  <span role="img" aria-label="frown emoji">🙁</span></p>
            <button className="unknown-return" type="button" onClick={() => history.goBack()}>
                Go Back
            </button>
        </section>
    )
}

export default Unknown;
