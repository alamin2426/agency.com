import React from 'react';
import './Servise.css'
import computerImage from '../../../assets/images/computer.svg'
import bookImage from '../../../assets/images/mms.svg'
import gropImage from '../../../assets/images/book.svg'
import smsImage from '../../../assets/images/sms.svg'

const Servise = () => {
    return (
        <div className='boxes'>
            <div className='dives'>
                <div className='div-mini'>
                    
                    <div className='pic'>
                    <img src={computerImage} alt="" />
                    </div>

                    <div>
                    <h1>Web Development</h1>
                    <p>My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else</p>
                    </div>
                    
                   
                </div>
                <div className='div-mini'>
                <div>
                    <img src={bookImage} alt="" />
                    </div>
                    <div>
                    <h1>Digital Marketing</h1>
                    <p>My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else</p>
                    </div>
                </div>
            </div>
            <div className='dives'>
                <div className='divose'>
                    <h1>We’re always ready <br /> for <span> challenges</span></h1>
                </div>
                <div className='div-mini'>
                <div>
                    <img src={gropImage} alt="" />
                    </div>

                    <div>
                    <h1>UI/UX Design</h1>
                    <p>My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else</p>
                    </div>
                </div>
                <div className='div-mini'>
                <div>
                    <img src={smsImage} alt="" />
                    </div>

                   <div>
                   <h1>Brand Design</h1>
                    <p>My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else</p>
                   </div>
                </div>
            </div>

        </div>
    );
};

export default Servise;