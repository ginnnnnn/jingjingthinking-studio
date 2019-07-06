import React from 'react';
import './firstpage.css';

const FirstPage = ({ onRouteChange }) => {
    return (
        <div className="first-page">
            <div className="first-page_content" >
                <h2 className="greeting">
                    oh!la
                </h2>
                <h1 className="logo-brand">
                    <span className="logo-brand_1">
                        Jing<span className="logo-brand_2">Jing</span>{" "}
                    </span>
                    <span className="logo-brand_3">Thinking</span>
                </h1>

                <div onClick={() => onRouteChange('about')} className="leading">
                    See what can help ?
                    </div>
            </div>
        </div >
    );
}

export default FirstPage;