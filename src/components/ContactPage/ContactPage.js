import React from 'react';
import './contactpage.css';
import me from "../../assests/me.jpg";

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="tc">
                <img src={me} alt="you" />
                <h1 className="f4">Austin</h1>
                <hr />
            </div>


            <p className="email">
                jingjingjingthinking@gmail.com
    </p>
            <p className="location">
                Loc. Tainan,Taiwan
    </p>
        </div>);
}

export default ContactPage;