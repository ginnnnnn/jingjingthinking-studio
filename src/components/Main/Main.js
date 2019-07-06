import React from 'react';
import './main.css';


const Main = (props) => {
    return (
        <div className="main">
            {props.children}
        </div>
    );
}

export default Main;