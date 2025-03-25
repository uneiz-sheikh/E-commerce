// import React from 'react'
import ImageCarousel from './slider'
import ProductPage from './productPage'
import NewsLetter from './newsLetter'
import Footer from './footer'

const Home = () => {
    return (
        <>
            <div className="home-page"  >
                <ImageCarousel />

                <ProductPage />
                <NewsLetter />
            </div>
            <Footer />
        </>
    )
}

export default Home