import React from 'react';
import './contactpage.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="tc">
                <img
                    src="https://scontent.fadl3-1.fna.fbcdn.net/v/t1.0-9/30714940_1894323803919204_3718709081469353984_o.jpg?_nc_cat=105&_nc_ht=scontent.fadl3-1.fna&oh=d775bdec9ff249f3d8660ece1214ff62&oe=5D4D9985"
                    alt="you"
                />
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