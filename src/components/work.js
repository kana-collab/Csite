import React from 'react';

const Work = ({ data, worktitle }) => {

    return (
        <>
            <div className="my-4 py-4" id='ourworks'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">{worktitle}</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
                        {data?.map((work, index) => (
                                <div
                                    key={work.id || index}
                                    className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 min-h-max"
                                >
                                    <div className="m-2 text-justify text-sm">
                                        <h2 className="font-semibold my-4 text-2xl text-center">
                                            {work.ClientName || 'Client Name'}
                                        </h2>
                                        <p className="text-md font-medium">
                                            {work.WorkDescription || 'Work description not available.'}
                                        </p>
                                        {work.WebsiteLink?.href && (
                                            <div className="text-center mt-4">
                                                <a
                                                    href={work.WebsiteLink.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center px-6 py-2 text-lg shadow-xl rounded-2xl"
                                                >
                                                {work.WebsiteLink.linktext || 'Visit Website'}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                                            
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work;