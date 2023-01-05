import React,{Component} from 'react';
import './Tranding.css';
import pic1 from '../Image/p_tranding/Rectangle 46.png';
import pic2 from '../Image/p_tranding/Rectangle 47.png';
import pic3 from '../Image/p_tranding/Rectangle 48.png';
import pic4 from '../Image/p_tranding/Rectangle 49.png';
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div className='trand-div'>
        <div className='mx-5'>
        <h2 className='text-start'>Tranding</h2>
        <Slider {...settings}>
          <div>
          <img className='trand-img' src={pic1} />
          </div>
          <div>
          <img className='trand-img' src={pic2} />
          </div>
          <div>
          <img className='trand-img' src={pic3} />
          </div>
          <div>
          <img className='trand-img' src={pic4} />
          </div>
          <div>
          <img className='trand-img' src={pic1} />
          </div>
          <div>
          <img className='trand-img' src={pic2} />
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}

// export default Tranding;
