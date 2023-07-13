import React from 'react';
import deliver from '../../../assets/svg/deliver.svg';
import design from '../../../assets/svg/design.svg';
import develop from '../../../assets/svg/develop.svg';
import discover from '../../../assets/svg/discover.svg';
import './WorkProcess.css';

const WorkProcess = () => {
    return (
        <div className='WorkProcess'>
            <div className='WorkProcessHeader'>
                <h1>How We Work</h1>
                <p>
                    Lorem ipsum was conceived as filler text, formatted in a
                    certain way to enable the presentation of graphic elements
                    in documents
                </p>
            </div>

            <div className='WorkProcessSection'>
                <div className='UpperRow'>
                    <div className='WorkProcessImgHolder cyan'>
                        <img src={discover} alt='' />
                    </div>

                    <div className='WorkProcessText'>
                        <h1>Discover</h1>
                        <p>
                            Lorem ipsum was conceived as filler text formatted
                            in a certain way to enable
                        </p>
                    </div>

                    <div className='WorkProcessImgHolder grey'>
                        <img src={develop} alt='' />
                    </div>

                    <div className='WorkProcessText'>
                        <h1>Develop</h1>
                        <p>
                            Lorem ipsum was conceived as filler text formatted
                            in a certain way to enable
                        </p>
                    </div>
                </div>

                <div className='LowerRow'>
                    <div className='WorkProcessText'>
                        <h1>Discover</h1>
                        <p>
                            Lorem ipsum was conceived as filler text formatted
                            in a certain way to enable
                        </p>
                    </div>

                    <div className='WorkProcessImgHolder grey'>
                        <img src={design} alt='' />
                    </div>

                    <div className='WorkProcessText'>
                        <h1>Deliver</h1>
                        <p>
                            Lorem ipsum was conceived as filler text formatted
                            in a certain way to enable
                        </p>
                    </div>

                    <div className='WorkProcessImgHolder cyan'>
                        <img src={deliver} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;
