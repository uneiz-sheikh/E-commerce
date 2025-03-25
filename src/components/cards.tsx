import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardList = () => {
    const [products, setProducts] = useState([]);
    const [favorites, setFavorites] = useState({}); 

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const toggleFavorite = (id) => {
        setFavorites(prev => ({
            ...prev,
            [id]: !prev[id] 
        }));
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {products.map(product => (
                    <div className="cards" key={product.id}>
                        <div className="product-img-wrp">
                            <img src={product.image} alt={product.title} loading="lazy" className="product-img" />
                        </div>
                        <div className="card-detail-wrp">
                            <div className="p-name">{product.title}</div>
                            <div className="p-price">From ${product.price}</div>
                        </div>
                        <div className="add-to-cart-btn-wrp">
                            <div className="add-cart-button">Add to Cart</div>
                        </div>
                        <div className="fav-icon" onClick={() => toggleFavorite(product.id)}>
                            <i className={favorites[product.id] ? "fas fa-heart" : "far fa-heart"}></i>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CardList;
