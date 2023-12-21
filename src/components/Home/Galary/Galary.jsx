import React from 'react';
import './Galary.css'
import comboImage from '../../../assets/images/two.jpg'
import threeImage from '../../../assets/images/three.jpg'
import fourImage from '../../../assets/images/four.jpg'

const Galary = () => {
    return (
        <div className='main-galary'>
            <div className='glary'>
                {/* <h2>

                </h2> */}
               <div className='pabe'>
               <div className='small-pave'>
               <h1>Our recent <span>projects</span></h1>
               
               <h4>Website development for <br /> Digital Company</h4>
               <p>My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else</p>
               </div>
               </div>
                <img src={comboImage} alt="" />
            </div>

            <div className='telary'>
                <div>
                <img src={threeImage} alt="" />
                
               <div className='cotoimage'>
               <img src={fourImage} alt="" />
               </div>
                </div>
                <div className='yeallobox'>
                    <h1></h1>
                </div>
                
            </div>
        </div>
    );
};

export default Galary;