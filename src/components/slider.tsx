import { Carousel } from 'react-bootstrap';
import Image1 from '../assets/images/banner-1.jpg'
import Image2 from '../assets/images/banner-2.jpg'


const ImageCarousel = () => {
    return (

        <div className="banner">

            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Image1}
                        alt="First slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Image2}
                        alt="Second slide"
                    />

                </Carousel.Item>

            </Carousel>

        </div>

    );
}

export default ImageCarousel;
