import React from 'react';
import './Promotion.css'
import promotionImage from '../../../assets/images/promotion 1.jpg'

const Promotion = () => {
    return (
        <div className='main-promotion'>
            <div className='promtion-one'>
                <h1>

                </h1>
                <img src={promotionImage} alt="" />
            </div>
            <div className='promoton-two'>
                <h1>
                The thing about us is <br />
                   <span> we think big, huge</span>
                </h1>
                <p>•  If the path is beautiful, let us not ask where it leads <br /> •  my religion is very simple. my religion is kindness <br />
                            •  each of us has within our power the ability to disrupt</p>
                           
                       
            </div>
            
        </div>
    );
};

export default Promotion;