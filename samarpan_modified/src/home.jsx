
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import FirstImg from './im1.jpg';
import SecImg from './img6.jpeg';
import ThirdImg from './img5.jpeg';
import four from './img4.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './home.css';

const Home = () => {
  return (<>
    

    <div className="home w3-card w3-resposive w3-container w3-padding-4">

      < br/> 
      <Carousel showThumbs={false}
        autoPlay
        infiniteLoop
        stopOnHover={false}
        showStatus={false}>
        <div className="w3-resposive w3-card">
          <img src={FirstImg} alt="LOADING" />
          </div>
        <div className="w3-resposive">
        <img src={SecImg} alt="LOADING 2"/>
          </div>
        <div className="w3-resposive">
        <img src={ThirdImg} alt="LOADING 3" />
          </div>
        <div className="w3-resposive">
                <img src={four} alt="LOADING 4" />
          </div>
      </Carousel>

    </div>
    </>
  );
};

export default Home;
{/* <div className="text  w3-card w3-container w3-resposive w3-center ">
<h1>Welcome to Samarpan 2023</h1>
<p>Discover a world of Samarpan.</p>

</div> */}