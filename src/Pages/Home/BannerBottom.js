import React from "react";
import "./BannerBottom.css";
import ReactPlayer from "react-player";

const BannerBottom = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-between Banner__bottom__section'>
        <div className='col-md-5'>
          <h1>London's most unusual attraction.</h1>
          <h3>Our venues are now open!</h3>
          <p>
            Welcome to DNA VR, London's First Virtual Reality arcade. We're on a
            mission to take you and your crew on a journey through incredible
            worlds in this reality and beyond - whether it's the terror of a
            zombie apocalypse, the mystery of the ocean deep, or the secrets of
            outer space. The only limit is your imagination.
          </p>
          <p>Are you ready to dive in?</p>
        </div>
        <div className='col-md-5 d-flex justify-content-start'>
          <div className='position-absolute player__videos'>
            <img width={110} src='assets/TC-Winner.gif' alt='Winner' />
            <br />
            <img width={110} src='assets/TC-Winner2022.gif' alt='Winner' />
          </div>
          <ReactPlayer
            style={{ borderRadius: "5px" }}
            className='react-player border borderr'
            url='https://www.youtube.com/watch?v=_fwf_XH9wLA'
            width='100%'
            height='100%'
          />
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
