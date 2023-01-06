import React,{Component} from 'react';
import './Tranding.css';
import pic1 from '../Image/p_tranding/Rectangle 46.png';
import pic2 from '../Image/p_tranding/Rectangle 47.png';
import pic3 from '../Image/p_tranding/Rectangle 48.png';
import pic4 from '../Image/p_tranding/Rectangle 49.png';
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
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
          <div>
          <img className='trand-img' src={pic3} />
          </div>
          <div>
          <img className='trand-img' src={pic4} />
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}

// export default Tranding;
