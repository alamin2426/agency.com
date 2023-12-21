import React from 'react';
import './Banner.css'
import oneImage from '../../../assets/images/one.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
       <div className='calorol'>
       <div className='left'>
            <h1> Grow your brand <br />through digital </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse totam necessitatibus aut illum eveniet suscipit minus consequuntur optio vitae inventore non voluptatibus, omnis porro ab mollitia quae! Rerum, assumenda debitis?</p>
            <button className="btn btn-outline">Ditails </button>

        </div>
        <div className='right'>
        <img src={oneImage} className="w-full" />
        </div>
       </div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full">
  <div className='calorol'>
       <div className='left'>
            <h1> Grow your brand <br />through digital </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse totam necessitatibus aut illum eveniet suscipit minus consequuntur optio vitae inventore non voluptatibus, omnis porro ab mollitia quae! Rerum, assumenda debitis?</p>
            <button className="btn btn-outline">Ditails</button>
            
        </div>
       
        <div className='right'>
        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
        </div>
       </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full">
  <div className='calorol'>
       <div className='left'>
            <h1> Grow your brand <br />through digital </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse totam necessitatibus aut illum eveniet suscipit minus consequuntur optio vitae inventore non voluptatibus, omnis porro ab mollitia quae! Rerum, assumenda debitis?</p>
            <button className="btn btn-outline">Ditails</button>

        </div>
        <div className='right'>
        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
        </div>
       </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide4" className="carousel-item relative w-full">
  <div className='calorol'>
       <div className='left'>
            <h1> Grow your brand <br />through digital </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse totam necessitatibus aut illum eveniet suscipit minus consequuntur optio vitae inventore non voluptatibus, omnis porro ab mollitia quae! Rerum, assumenda debitis?</p>
            <button className="btn btn-outline">Ditails</button>

        </div>
        <div className='right'>
        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
        </div>
       </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;