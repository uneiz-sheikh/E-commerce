// import React from 'react'

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <div className="newsletter-detail">
                <div className="news_cont">
                    <div className="news-haedi">
                        Join Our Newsletter
                    </div>
                    <div className="search_box">
                        <div className="wrp">
                            <i className="fal fa-envelope"></i>
                            <input placeholder='Enter Your Email' type='text' />
                        </div>
                        <div className="search_icon">
                            Subscribe
                            <i className="far fa-long-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter