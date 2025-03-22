import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import { Link } from 'react-router-dom';

const Hero = ({ heroData, headerData }) => {

    if (!heroData || !heroData.HeroTitle) {
        return <div>Loading Hero Section...</div>;
    }

    const DAC_URL = process.env.REACT_APP_DAC_APP_URL;

    const imageUrl = `${DAC_URL}${heroData.HeroImage.url}`;

    return (
        <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar data={headerData} />
                </div>
                
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-auto lg:h-5/6" data-aos="zoom-in">

                    <div id='hero' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="flex justify-center lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            {heroData.HeroImage.url ? (
                                <img
                                    alt={heroData.HeroImage.alternativeText || 'Default Alt Text'}
                                    className="rounded-t w-full max-w-xs lg:max-w-full duration-1000"
                                    src={imageUrl || '/default-image.jpg'}
                                />
                            ) : (
                                <div>Loading Image...</div>
                            )}
                        </div>
                        <div className="lg:w-1/2 flex flex-col justify-center mt-4 lg:mt-0" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold text-blue-900">
                                {heroData.HeroTitle || 'Default Title'}
                            </h1>
                            <div className="text-lg md:text-xl font-semibold tracking-tight mb-5 text-gray-500">
                                {heroData.HeroSubtitle || 'Default Subtitle'}
                            </div>
                            <div className="mb-4 space-y-4 md:space-y-0 md:space-x-2 md:mb-8">
                                <Link to={heroData.LearnMoreCTA.CTAHref} className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 text-lg shadow-xl rounded-2xl sm:w-auto">
                                    {heroData.LearnMoreCTA.CTAText}
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </div> 
                        </div>                      
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;