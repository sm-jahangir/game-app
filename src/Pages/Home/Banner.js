import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className='main__bannerSection'>
      <img
        className='banner__cover__image'
        src='assets/insideview0073_1.png'
        alt=''
      />
      <img
        className='banner__cover__top'
        src='assets/banner-image-2.png'
        alt=''
      />
      <div className='intro__title__section'>
        <h1 class='intro-title text-center text-white fw-bold'>
          London's First VR <br />
          <span>Arcade</span>
        </h1>
        <div class='intro__button text-center'>
          <a href='https://booking.dnavr.co.uk/' class='btn btn-primary btn-lg'>
            book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
