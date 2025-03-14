import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Works</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">                            
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Ratna Caterings</h4>
                                <p className="text-lg font-medium leading-5 h-auto md:h-48">
                                    Ratna Caterings is a catering service that provides quality food and services to its customers. 
                                    The website was built to showcase the company's services, menu, and contact information. 
                                    It features a clean and modern design with easy navigation and a user-friendly interface.
                                    The website is fully responsive and optimized for search engines.
                                    The website also has a contact form that allows customers to send messages directly to the company.
                                </p>
                                <div className="flex justify-center my-4">
                                    <a href="https://kano9.pythonanywhere.com" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl" target="_blank" rel="noopener noreferrer">
                                        Visit Website
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Sarjan Architects & Project Consultants</h4>
                                <p className="text-lg font-medium leading-5 h-auto md:h-48">
                                    Sarjan Architects & Project Consultants is a leading architectural and project management firm in India.
                                    The website was built to showcase the company's portfolio, services, and contact information.
                                    It features a modern and professional design with easy navigation and a user-friendly interface.
                                    The website is fully responsive and optimized for search engines.
                                </p>
                                <div className="flex justify-center my-4">
                                    <a href="https://kano9.pythonanywhere.com" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl" target="_blank" rel="noopener noreferrer">
                                        Visit Website
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                                            
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;