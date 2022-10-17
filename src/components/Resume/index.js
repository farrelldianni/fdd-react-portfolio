import React from 'react';

function Resume() {
    return (
        <div>
            <h2>Resume</h2>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Frontend Tech</h2>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Back-end Proficiencies</h2>
                        <ul>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>API Creation</li>
                            <li>Express</li>
                            <li>REST</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Resume;