import React from 'react';
import './aboutpage.css';
import { aboutContent } from './aboutContent'

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="about-page_header">
                <div className="about-page_header_title">
                    <h3 >
                        <span >
                            {aboutContent.title}
                        </span>
                    </h3>
                    <h4 >{aboutContent.title_2}</h4>
                    <h5 >{aboutContent.title_3}</h5>
                </div>
            </div>
            <div className="about-page_content">
                <p>{aboutContent.para_1}</p>
                <p>{aboutContent.para_2}</p>
                <p>{aboutContent.para_3}</p>
                <p>{aboutContent.para_4}</p>
                <p>{aboutContent.para_5}</p>

            </div>
        </div>
    );
}

export default AboutPage;